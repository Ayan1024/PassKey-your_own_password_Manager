import React from 'react'

function Navbar() {
  return (
   
    <nav className='sticky top-0 bg-purple-700 flex justify-around items-center h-14 shadow-lg    '>
        <div className="logo text-2xl font-bold">PassKey🗝️</div>
        <div>
          <a href="https://github.com/Ayan1024" target='_blank'><img className='w-8 cursor-pointer' src="public/icons/github-mark.svg"alt="" /></a>
        </div>
  
    </nav>
    
  )
}

export default Navbar
