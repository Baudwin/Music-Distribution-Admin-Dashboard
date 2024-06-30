/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
// import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import { FiLogOut } from 'react-icons/fi'
import { AiFillCustomerService } from 'react-icons/ai'
import { FaServicestack } from 'react-icons/fa'
// import UsersIcon from '@heroicons/react/24/outline/UsersIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const menu_links = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },

  // {
  //   path: '/earnings',
  //   icon: <CurrencyDollarIcon className={iconClasses}/>,
  //   name: 'Earnings',
  // },

  // {
  //   path: '/services', 
  //   icon: <AiFillCustomerService className={iconClasses}/>, 
  //   name: 'Services', 
  // },


  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
    ]
  },


{
    path: '/', // url
    icon: <FiLogOut className={iconClasses}/>, // icon component
    name: 'Logout', // name that appears in Sidebar
  },


]

export default menu_links


