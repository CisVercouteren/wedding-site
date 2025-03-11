import { useState } from 'react';
import { Link } from 'react-scroll';
import {navigationLinks} from '../data/data.js'
import Button from './Button.jsx';
import {Squash as Hamburger} from 'hamburger-react';


const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleSmoothScroll = (e) => {
    console.log(e.target.innerHTML);
    const element = document.getElementById(e.target.innerHTML);
    if (element) {
      const elementPosition = element.offsetTop - 60;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  }

    return (
      <div className='sticky top-0 left-0 w-full bg-cream z-50'>
      <header className={`pt-4 px-6 ${ isOpen ? '' : 'border-b-4'} border-gray-500 mx-8 flex flex-row sticky top-0 left-0`}>
        <div className='justify-start items-start ml-0 z-50' onClick={() => {
          console.log('clicked div');
            window.scroll({
              top: 0, 
              behavior: 'smooth'
            });
          }}>
          <img className="w-16" src="../src/assets/logo.png" alt="" onClick={() => {
            console.log('clicked img');
            window.scroll({
              top: 0, 
              behavior: 'smooth'
            })
          }}/>
        </div>
        {isOpen && (
          <div className='lg:hidden fixed inset-0 z-40 bg-sand flex flex-col items-center justify-center'>
            {/*<div className='absolute top-4 right-6'>
              <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
            </div>*/}
            
            <nav className='flex flex-col items-center space-y-12'>
              {navigationLinks.map((item) => (
                <button
                  key={item.id} 
                  className='uppercase text-2xl hover:text-gray-500/70'
                  onClick={(e) => {
                    setOpen(false); 
                    handleSmoothScroll(e);
                  }}
                >
                  {item.title}
                </button>
              ))}
            </nav>
            
            <Button 
              className='w-40 border-2 border-gray-500 flex items-center text-center justify-center rounded-xl my-12'
              onClick={(e) => {
                setOpen(false);
                handleSmoothScroll(e);
              }}
            >
              <span className='px-2 py-2 text-2xl'>RSVP</span>
              <svg className='w-6 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"/>
              </svg>
            </Button>
          </div>
        )}
        <nav className="hidden lg:flex lg:flex-row items-center justify-center ml-24">
            {
              navigationLinks.map((item) => (
              <button key={item.id} className='uppercase mx-4 lg:relative hover:text-gray-500/70' onClick={handleSmoothScroll}>
                {item.title}
              </button>
              ))
            }
          </nav>
        <Button className={`${isOpen ? 'flex' : 'hidden'} border-2 border-gray-500 lg:flex items-center text-center justify-center my-auto rounded-xl ml-auto`} onClick={handleSmoothScroll}>
          <span className='px-2'>RSVP</span>
          <svg className='w-3 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"/></svg>
        </Button>
        <div className='lg:hidden z-50 flex items-center ml-auto'>
          <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
        </div>
        
      </header>
      </div>
    );
  };
  
  export default Header;