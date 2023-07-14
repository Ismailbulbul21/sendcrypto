import React from 'react'
import {AiFillFacebook,AiFillInstagram ,AiOutlineTwitter} from "react-icons/ai"



const Footer = () => {
  return (
    <div className=' flex justify-between items-center border-t-2 border-dashed  border-black bg-[#07182ece] h-40 w-full px-5'>
        
<div>

<a className=' text-2xl' href='#'>Send<span className=' text-yellow-400'>Crypto</span></a>

</div>


<div className=' flex max-sm:flex-col  gap-5'>

<AiFillFacebook size={30} />
<AiFillInstagram  size={30}/>
<AiOutlineTwitter  size={30}/>

</div>

<div>

<a href='#'>Copy Right 2023 sendcrypto & All Rights </a>


</div>

    </div>
  )
}

export default Footer