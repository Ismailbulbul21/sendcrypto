import React from 'react'
import img1 from "../sawir/circle-with-i-1.png"
import img2 from "../sawir/payment-method-1.png"
import img3 from "../sawir/updteee.png"

const Home = () => {
  return (
    <div className=' bg-[#07182ece] h-screen w-full flex justify-between items-center px-5 gap-3 max-sm:flex-col max-sm:h-full max-sm:px-12 max-sm:py-16   '>
        
<div className=' shadow-2xl border-2  border-black px-12 p-12 max-w-[500px] text-center '>

<img src={img1} className=' h-14 w-full object-contain' />

<h1 className=' mb-3 text-3xl font-bold text-white '>Market Updated </h1>
<p className=' text-1xl text-white font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


</div>



<div className=' shadow border-2  border-black px-12 p-12 max-w-[500px] text-center'>


<img src={img2} className=' h-14 w-full object-contain' />

<h1 className=' mb-3 text-3xl font-bold text-white '>Market Updated </h1>
<p className=' text-1xl text-white font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>




</div>





<div className=' shadow border-2  border-black px-12 p-12 max-w-[500px] text-center max-sm:mb-4  '>

<img src={img3} className=' h-14 w-full object-contain rounded-full' />
<h1 className=' mb-3 text-3xl font-bold text-white '>Market Updated </h1>
<p className=' text-1xl text-white font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


</div>








    </div>
  )
}

export default Home