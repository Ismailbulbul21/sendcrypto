import React from 'react'
import img4 from "../sawir/bitcoin.png"
const Form = () => {
  return (
    <div className=' h-screen w-full bg-[#07182ece] flex  justify-between max-sm:justify-center px-12  md:py-20 py-24 max-sm:flex-col '>
        
<div className='   '>

<img src={img4} className=' rounded-2xl w-full h-72 max-sm:hidden  object-contain ' />
</div>


<div className='      '>

<form className=' flex flex-col gap-8 text-center '>
<input className=' md:p-6 md:px-24 p-5 outline-none  ' placeholder='Reciver Addresser'/>
<input className=' md:p-6 md:px-12 p-5  outline-none  '  placeholder='Amount (ETH)'/>
<input className=' md:p-6 md:px-12 p-5  outline-none  '  placeholder='Enter Gif Link'/>
<input className=' md:p-6 md:px-12 p-5  outline-none  '  placeholder='Enter Message '/>

<button className=' bg-slate-900 p-3 rounded-full text-2xl text-white hover:opacity-80'>Send</button>
</form>

</div>

    </div>
  )
}

export default Form