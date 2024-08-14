import React from 'react'
import {ButtonProps} from "../../types"

const Button = ({title,designs,type,icon,disabled,handleClick}:ButtonProps) => {
  return (
<button
 disabled={disabled}
 onClick={handleClick}
  className={`${designs} custom-btn bg-primary-blue rounded-full
hover:bg-blue-800 text-white`}>


<span className='flex-1'>
{title}
</span>

{icon && <img src={icon} alt="" className='hover:bg-blue-400 rounded-full relative w-6 h-6' />}
</button>


  )
}

export default Button