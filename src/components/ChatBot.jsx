import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatBot() {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! How can I help you?' }]);
  const [input, setInput] = useState('');
  const [botHi, setBotHi] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setBotHi('👋 Hi there!');
      setTimeout(() => setBotHi(''), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input.trim() };
    let botReply = { from: 'bot', text: 'Sorry, I did not understand that.' };

    // Basic bot logic
    if (input.toLowerCase().includes('hello')) {
      botReply = { from: 'bot', text: 'Hello! How can I assist you today?' };
    } else if (input.toLowerCase().includes('price')) {
      botReply = { from: 'bot', text: 'Our prices are very competitive!' };
    } else if (input.toLowerCase().includes('bye')) {
      botReply = { from: 'bot', text: 'Goodbye! Have a nice day!' };
    } else if(input.toLowerCase().includes('who') && input.toLowerCase().includes('abhay')) {
        botReply = { from: 'bot', text : 'He is a legend' }
    }

    setMessages(prev => [...prev, userMessage, botReply]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <div
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-3 rounded-full cursor-pointer shadow-lg animate-bounce"
        onMouseEnter={() => setShowModal(true)}
      >
        <MessageCircle className="text-white" />
        {botHi && (
          <div className="absolute -left-10 -top-8 right-5 bg-white text-sm text-black px-2 py-3 rounded shadow">
            {botHi}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed bottom-20 right-6 w-100 h-100 bg-white rounded-xl shadow-2xl flex flex-col overflow-x-auto">
          {/* Header */}
          <div className="flex justify-between items-center bg-green-500 text-white p-2 rounded-t-xl">
            <span>ChatBot</span>
            <button onClick={() => setShowModal(false)}>
              <X className="w-4 h-4 cursor-pointer" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto max-h-64">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-1 p-2 rounded ${
                  msg.from === 'bot' ? 'bg-gray-200 text-black mr-30' : 'bg-green-100 text-black ml-30 mt-5 mb-5 self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t mt-10 py-3 px-3">
            <input
              type="text"
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="bg-green-500 text-white px-3 rounded-lg cursor-pointer hover:bg-green-700"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
