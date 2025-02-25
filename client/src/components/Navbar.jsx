import React from 'react'
import image from "../assets/solvifycroplogo.png"


const Navbar = ({scrollToAbout,scrollToHome,scrollToEvent,scrollToProject,scrollToTeam,scrollToPhoto,scrollToInsta}) => {
    
    const navItems = [
        {
            link:'Home',action:scrollToHome
        },
        {
            link:'About',action:scrollToAbout
        },
        {
            link:'Event',action:scrollToEvent
        },
        {
            link:'Projects',action:scrollToProject
        },
        {
            link:'Team',action:scrollToTeam
        },
        {
            link:'Photos',action:scrollToPhoto
        },
        {
            link:'Feed',action:scrollToInsta
        }
    ]

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
    <nav className="px-28 mt-5 ">
      <div className="flex justify-between items-center bg-LightGrey py-4 px-16 rounded-3xl">
        <button
          onClick={() => scrollToHome()}
        >
          <img src={image} className="mr-36 rounded-lg w-12 z-10" />
        </button>

        <ul className="flex space-x-10 font-bold text-lg">
          {navItems.map(({ link, action }) => (
            <li key={link}>
              <button
                onClick={action}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Navbar