import React from 'react'
import {BsSearch, BsJustify} from 'react-icons/bs'
function Header({OpenSidebar}) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                <b>Hello Sachin</b>
            </div>
            <div className='header-right'>
                <input/>
                <BsSearch  className='icon'/>
            </div>
        </header>
    )
}
export default Header