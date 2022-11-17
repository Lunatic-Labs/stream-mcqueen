import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    iconClosed: <AiIcons.AiOutlineHome />,
    iconOpened: <AiIcons.AiOutlineHome />,
  },
  {
    title: 'Chapels',
    path: '/chapels',
    icon: <BiIcons.BiChurch />,
    iconClosed: <BiIcons.BiChurch />,
    iconOpened: <BiIcons.BiChurch />,
  },
  {
    title: 'Events',
    path: '/events',
    icon: <MdIcons.MdEvent />,
    iconClosed: <MdIcons.MdEvent />,
    iconOpened: <MdIcons.MdEvent />,
  },
  {
    title: 'Concerts',
    path: '/concerts',
    icon: <GiIcons.GiMicrophone />
  },
  {
    title: 'Sports',
    path: '/sports',
    icon: <MdIcons.MdOutlineSportsTennis />
  },
  {
    title: 'My List',
    path: '/mylist',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {

  },
  {

  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Sign Out',
    path: '/login',
    icon: <IoIcons.IoMdHelpCircle />
  }
  
];