import { MoveRight } from 'lucide-react'
import React from 'react'

const Section = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center max-w-3xl px-15 py-19">
            <p className='text-5xl font-bold font-serif
             text-[#6E260E]'>A FEW WORDS ABOUT US</p>
            <p className='mt-12 text-lg text-justify'>
              Located in the serene village of Tholicode(Pulimoodu) in Tholicode Panchayath, Our college is a center of excelence dedicated to providing quality education in a peacefull and nature rich environment. Just 13 kilometeres from Nedumangad town, our campus offers students a calm and inspiring atmosphere for academic and personal growth.
              Our college is one of the  
               <span className='font-extrabold text-blue-950'> 30 learning centers governed by the University of Kerala(UOK)</span>
              ,Which established these institutions 25 years ago to 
              <span className='font-extrabold text-blue-950'> promote technology-focused education in rural areas.</span> 
              These centers offers specialized undergraduate programs such as 
              <span className='font-extrabold text-blue-950'> BBA, B.Sc Computer Science, Electronics, BCA and BCom. Commerce with Computer Applications</span>
              ,ensuring that students from remote locations have access to modern education and career opputunities. 
            </p>
            <button className=' flex gap-2 mt-12 border px-25 py-3 rounded-3xl bg-blue-950 text-white'>LEARN MORE</button>
        </div> 
    </div>
  )
}

export default Section
