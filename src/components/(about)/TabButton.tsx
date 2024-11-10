import React from 'react'

function TabButton({active,selectTab ,children}:{active:boolean, selectTab:()=> void, children:React.ReactNode}) {
    const  buttonClasses = active ? "text-white border-b border-purple-500" :"text-[#adb7be] "
  return (
    <button onClick={selectTab} >
       <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}` }> 
        {
            children
        }
        </p>
    </button>
     
  )
}

export default TabButton
