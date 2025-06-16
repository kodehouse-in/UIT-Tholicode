import { MoveRight } from 'lucide-react'
import React from 'react'

const Section = () => {
  return (
    <div>
        <div className="max-w-lg p-15">
            <p className='text-2xl font-semibold text-blue-950'>UNIVERSITY INSTITUTE OF TECHNOLOGY</p>
            <p className='mt-2 text-lg'>Lorem ipsum dolor sit amet. Ut ratione nobis eos vero vero aut perspiciatis quae sit temporibus libero qui consequatur quia. 
            Lorem ipsum dolor sit amet. Ut ratione nobis eos vero vero aut perspiciatis quae sit temporibus libero qui consequatur quia. 
            Lorem ipsum dolor sit amet. Ut ratione nobis eos vero vero aut perspiciatis quae sit temporibus libero qui consequatur quia. </p>
            <button className=' flex gap-2 mt-3 border px-4 py-2 rounded-3xl bg-blue-950 text-white'>MORE DETAILS<MoveRight /></button>
        </div> 
    </div>
  )
}

export default Section
