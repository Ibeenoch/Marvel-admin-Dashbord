import React, { useState } from 'react'
import { ReactComponent as EmailLogo } from '../asset/envelope.svg';
import { ReactComponent as SettingLogo } from '../asset/settings.svg';
import { ReactComponent as UserLogo } from '../asset/user-account-profile-svgrepo-com.svg';
import { ReactComponent as NotificationBellLogo } from '../asset/notification-bell.svg';
import { ReactComponent as ClipboardLogo } from '../asset/clipboard_regular_icon_202965.svg';
import { ReactComponent as FocusLogo } from '../asset/focus-8.svg';
import { ReactComponent as ChatLogo } from '../asset/chat-svgrepo-com.svg';
import { ReactComponent as SearchLogo } from '../asset/search.svg';
import { ReactComponent as MenuLogo } from '../asset/menu.svg';
import { ReactComponent as CancelLogo } from '../asset/cancel-close-svgrepo-com.svg';

const NavBar = () => {
    // blue-light #233fcb
    // grayblue #20304c
    // darkgrayblue #0c1a32
    // text cyan #3a92cd
    // gradient low #1079c1 to #3018d2
    const [navItem, setNavItem ] = useState({
        settings: false, profile: false, notification: false, target: false, clipboard: false, chat: false
    });
    const [ showMenu, setShowMenu ] = useState(false);
    const { settings, profile, notification, target, clipboard, chat } = navItem

    const makeNavMenuShow = () => {
        setShowMenu(true);
    }

    const makeNavMenuHidden = () => {
        setShowMenu(false);
    };

    const settingsActive = () => {
        setNavItem({ settings: true, profile: false, notification: false, target: false, clipboard: false, chat: false })
    };

    const profileActive = () => {
        setNavItem({ settings: false, profile: true, notification: false, target: false, clipboard: false, chat: false })
    };

    const notificationActive = () => {
        setNavItem({ settings: false, profile: false, notification: true, target: false, clipboard: false, chat: false })
    };

    const targetActive = () => {
        setNavItem({ settings: false, profile: false, notification: false, target: true, clipboard: false, chat: false })
    };

    const clipboardActive = () => {
        setNavItem({ settings: false, profile: false, notification: false, target: false, clipboard: true, chat: false })
    };

    const chatActive = () => {
        setNavItem({ settings: false, profile: false, notification: false, target: false, clipboard: false, chat: true })
    };

    
  return (
    <div className='fixed top-0 w-[100vw] sm:pr-4 z-40 bg-opacity-100'>
        {/* deskop  */}
        <div className='bg-gradient-to-r from-[#1079c1] to-[#3018d2] w-full  px-4 py-2'>
            <div className='hidden sm:flex justify-between items-center gap-1'>

                <div className='flex items-center gap-2'>
                    <div className='bg-[#0c1a32] flex justify-center hover:opacity-80 items-center rounded-sm p-1 cursor-pointer'>
                        <SettingLogo className='w-6 h-6 stroke-red-600 ' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center hover:opacity-80 items-center rounded-sm p-1 cursor-pointer'>
                        <UserLogo className='w-6 h-6 stroke-cyan-400' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center  hover:opacity-80 items-center rounded-sm p-1 cursor-pointer'>
                        <NotificationBellLogo className='w-6 h-6 fill-purple-600' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center  hover:opacity-80 items-center rounded-sm p-1 cursor-pointer'>
                        <FocusLogo className='w-6 h-6 fill-yellow-600' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-md p-1'>
                        <form className='flex gap-1 items-center bg-[#0c1a32]'>
                        <SearchLogo className='w-5 h-5 fill-yellow-600' />
                        <input type="search" name="searchbar" id="searchbar" className='bg-[#0c1a32] ring-0 ring-inset ring-[#0c1a32] border-0 text-gray-100 focus:ring-0 focus:ring-inset focus:ring-none' />
                        <p className='text-gray-300 text-sm'>Search</p>
                        </form>
                    </div>
                </div>

                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#0c1a32]  hover:opacity-80 flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <ClipboardLogo className='w-6 h-6 fill-cyan-400' />
                        </div>
                        <div className='bg-[#0c1a32]  hover:opacity-80 flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <p className='text-md text-red-600 px-1'>@</p>
                        </div>
                        <div className='bg-[#0c1a32]  hover:opacity-80 flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <ChatLogo className='w-6 h-6 fill-cyan-600 stroke-cyan-600' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2 bg-cyan-600 rounded-lg p-2 cursor-pointer'>
                        <h2 className='text-white'>Maximum Admin</h2>
                    </div>
                </div>

            </div>
            
            {/* mobile div  */}
            

       

      {/* mobile */}
      <div onClick={makeNavMenuShow} className={`sm:hidden flex justify-end p-4`}>
            <MenuLogo className='w-10 h-10 fill-black cursor-pointer' />
        </div>

      <div className={`sm:hidden ${ showMenu ? 'block' : 'hidden'} fixed right-0 top-0 bg-gray-100 w-[70%] h-screen bg-opacity-100 z-40`}>
        <div onClick={makeNavMenuHidden} className='flex justify-end p-4'>
            <CancelLogo className='w-10 h-10 fill-gray-800 cursor-pointer' />
        </div>

        <div onClick={settingsActive} className={`flex items-center px-4 py-2 cursor-pointer ${ settings ? 'border-l-2 border-r-2 border-red-600 bg-red-100' : '' } `}>
            <SettingLogo className='w-9 h-9 stroke-red-600' />
            <p className='pl-4 text-red-600 font-semibold text-2xl'>Settings</p>
        </div>

        <div onClick={profileActive} className={`flex items-center px-4 py-2 cursor-pointer ${ profile ? 'border-l-2 border-r-2 border-cyan-600 bg-cyan-100' : '' } `}>
            <UserLogo className='w-9 h-9 stroke-cyan-400' />
            <p className='pl-4 text-cyan-600 font-semibold text-2xl'>Profile</p>
        </div>

        <div onClick={notificationActive} className={`flex items-center px-4 py-2 cursor-pointer ${ notification ? 'border-l-2 border-r-2 border-purple-600 bg-purple-100' : '' } `}>
            <NotificationBellLogo className='w-9 h-9 fill-purple-600' />
            <p className='pl-4 text-purple-600 font-semibold text-2xl'>Notification</p>
        </div>

        <div onClick={targetActive} className={`flex items-center px-4 py-2 cursor-pointer ${ target ? 'border-l-2 border-r-2 border-yellow-600 bg-yellow-100' : '' } `}>
            <FocusLogo className='w-9 h-9 fill-yellow-600' />
            <p className='text-yellow-600 pl-4 font-semibold text-2xl'>Target</p>
        </div>

        <div onClick={clipboardActive} className={`flex items-center px-4 py-2 cursor-pointer ${ clipboard ? 'border-l-2 border-r-2 border-cyan-600 bg-cyan-100' : '' } `}>
            <ClipboardLogo className='w-9 h-9 fill-cyan-400' />
            <p className='text-cyan-600 pl-4 font-semibold text-2xl'>Clipboard</p>
        </div>

        <div onClick={chatActive} className={`flex items-center px-4 py-2 cursor-pointer ${ chat ? 'border-l-2 border-r-2 border-cyan-600 bg-cyan-100' : '' } `}>
            <ChatLogo className='w-9 h-9 fill-cyan-600 stroke-cyan-600' />
            <p className='text-cyan-600 pl-4 font-semibold text-2xl'>Chat</p>
        </div>

      </div>
      
       </div>

    </div>
  )
}

export default NavBar
