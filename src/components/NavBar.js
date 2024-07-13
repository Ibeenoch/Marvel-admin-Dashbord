import React from 'react'
import { ReactComponent as EmailLogo } from '../asset/envelope.svg';
import { ReactComponent as SettingLogo } from '../asset/settings.svg';
import { ReactComponent as UserLogo } from '../asset/user-account-profile-svgrepo-com.svg';
import { ReactComponent as NotificationBellLogo } from '../asset/notification-bell.svg';
import { ReactComponent as ClipboardLogo } from '../asset/clipboard_regular_icon_202965.svg';
import { ReactComponent as FocusLogo } from '../asset/focus-8.svg';
import { ReactComponent as ChatLogo } from '../asset/chat_4.svg';
import { ReactComponent as SearchLogo } from '../asset/search.svg';

const NavBar = () => {
    // blue-light #233fcb
    // grayblue #20304c
    // darkgrayblue #0c1a32
    // text cyan #3a92cd
    // gradient low #1079c1 to #3018d2
  return (
    <div >
        {/* deskop  */}
        <div className='bg-gradient-to-r from-[#1079c1] to-[#3018d2] w-full h-10 px-4 py-2'>
            <div className='hidden sm:flex justify-between items-center gap-1'>

                <div className='flex items-center gap-2'>
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                        <SettingLogo className='w-6 h-6 stroke-red-600' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                        <UserLogo className='w-6 h-6 stroke-cyan-400' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                        <NotificationBellLogo className='w-6 h-6 fill-purple-600' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                        <FocusLogo className='w-6 h-6 fill-yellow-600' />
                    </div>
                    
                    <div className='bg-[#0c1a32] flex justify-center items-center rounded-md p-1'>
                        <form className='flex items-center bg-[#0c1a32]'>
                        <SearchLogo className='w-5 h-5 fill-yellow-600' />
                        <input type="search" name="searchbar" id="searchbar" className='bg-[#0c1a32] text-gray-100 focus:ring-0 ' />
                        <p className='text-gray-300 text-sm'>Search</p>
                        </form>
                    </div>
                </div>

                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <ClipboardLogo className='w-6 h-6 fill-cyan-400' />
                        </div>
                        <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <p className='text-md text-red-600 px-1'>@</p>
                        </div>
                        <div className='bg-[#0c1a32] flex justify-center items-center rounded-sm p-1 cursor-pointer'>
                            <ChatLogo className='w-6 h-6 fill-cyan-400 p-1' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <h2 className='text-white'>Maximum Admin</h2>
                    </div>
                </div>

            </div>
            
            {/* second div  */}
            <div></div>

        </div>

      
    </div>
  )
}

export default NavBar
