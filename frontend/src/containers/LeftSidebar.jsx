import { NavLink, Link , useLocation} from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon'
import menu_links from '../routes/sidebar_links';

function LeftSidebar(){
    const location = useLocation();

    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return(
        <div className="drawer-side  z-30  ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label> 
            <ul className="menu  pt-2 w-80 bg-base-100 min-h-full  text-base-content">
            
            <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-2 mr-2 absolute lg:hidden" onClick={() => close()}>
            <XMarkIcon className="h-5 inline-block w-5"/>
            </button>

                <li className="mb-4  font-semibold text-xl">

                    <Link className='' to={'/app/welcome'}>
                    <div className='bg-pink-700 rounded shadow'>
                     <span className='text-white px-3 py-1 font-semibold'>E</span>   
                    </div>
                    
                    Emergence Music
                    </Link>

                    </li>
                    
                {
                    menu_links.map((link, i) => {
                        return(
                            <li className="" key={i}>
                                {
                                    link.submenu ? 
                                        <SidebarSubmenu {...link}/> : 

                                    (
                                
                                    <NavLink end to={link.path}
                                        className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                           {link.icon} {link.name}
                                            {
                                                location.pathname === link.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                            }
                                    </NavLink>)
                                }
                                
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default LeftSidebar