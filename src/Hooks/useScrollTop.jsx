import React from 'react'

const useScroll = (num)=>{
    setTimeout(() => {
        window.scrollTo({ top:num, behavior: 'smooth' })
    }, 100)
}

export default useScroll
