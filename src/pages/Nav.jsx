import React from 'react'

const Nav = () => {
  return (
    <div className=' h-[88px] flex justify-between items-center  bg-[#07182ece] px-12 text-white w-full'>
       <div className=' flex items-center gap-6'>
        <a className=' text-2xl' href='#'>Send<span className=' text-yellow-400'>Crypto</span></a>
        
<ul  className='flex gap-5 max-sm:hidden  '>
<li>< a href='form'>Market</a></li>
<li>< a href='#'>Protfolio</a></li>
<li>< a href='#'>Product</a></li>


</ul>




        </div> 

        <div className=''>

<button className=' bg-yellow-400 p-3 rounded-full'>Connect Wallet</button>

        </div>



    </div>
  )
}

export default Nav