import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({color}) => {
    // console.log(color);
    const{hex,weight,type}=color
    const saveToClipboard=async ()=>{
        if (navigator.clipboard) {
            try {
               await navigator.clipboard.writeText(`#${hex}`) 
               toast.success('color copied to clipboard')
            } catch (error) {
               toast.error('color can\'t be copied to clipboard')
                
            }
        } else {
           toast.error(`clipboard access not available`) 
        }
    }
  return (
    <article className={type === "shade" ? "color color-light" : "color"}  style={{backgroundColor:`#${hex}`}}
    onClick={saveToClipboard}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor