import React from 'react'
import { BsPeopleFill, BsFillGearFill} from 'react-icons/bs'
import {AiOutlineKey} from "react-icons/ai";
import {BiCubeAlt} from "react-icons/bi";
import {CiWallet} from "react-icons/ci";
import {LuBadgePercent} from "react-icons/lu";
import {MdOutlineLiveHelp} from "react-icons/md";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsFillGearFill  className='icon_header'/> Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <AiOutlineKey className='icon'/> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="" >
                        <BiCubeAlt className='icon'/> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <CiWallet className='icon'/> Income
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <LuBadgePercent className='icon'/> Promote
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <MdOutlineLiveHelp className='icon'/> Help
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar