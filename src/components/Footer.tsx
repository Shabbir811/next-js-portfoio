import React from 'react'

function Footer() {
  return (
    <footer className='border border-t-[#33353f] border-l-transparent border-r-transparent text-white'>
        <div className='p-12 flex justify-between '>
            <span>Portfolio</span>
            <p className='text-slate-600'>
                All Right Reserved.
                <br />
                Power By:<span className='font-medium m-1'>Ghulam shabbir</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer
