import { Facebook, Mail, Phone, X } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:px-28 px-2 sm:py-3">
        <div className="flex  gap-4"> 
            <img className='sm:w-20 w-12' src="/images/UIT-Logo.svg" alt="" /> 
            <div className="flex-col my-4">
                <p className='sm:text-4xl text-2xl font-serif'>UIT-THOLICODE</p>
                <hr className='mt-2 mb-2'/>
                <p className='sm:text-lg text-xs text-red-500'>REGIONAL CENTRE THOLICODE,NEDUMANGAD</p>
            </div>
        </div>
        <div className="hidden md:flex ">
            <div className="flex items-center justify-center w-8 mr-2">
                <p className='rotate-270 whitespace-nowrap text-lg font-semibold'>CONTACT</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-3">
                    <div className="flex gap-4">
                        <div className="border-2 border-red-500 rounded-3xl p-1">
                            <Mail className='text-red-500 size-5'/>
                        </div>
                        <p className='text-sm mt-2 underline'>uittholicode@gmail.com</p>
                    </div>
                    
                </div>
                    <hr className='mt-2'/>
                <div className="flex gap-3 mt-2">
                    <div className="flex gap-4">
                        <div className="border-2 border-red-500 rounded-3xl p-1">
                            <Phone className='text-red-500 size-5'/>
                        </div>
                        <p className='text-sm mt-2 '>+99 9999999999</p>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
