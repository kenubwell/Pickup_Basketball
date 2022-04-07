import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/home"
    },
    {
        title: 'Calendar',
        path: '/home',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Courts',
        path: '/courts',
        icon: <FaIcons.FaCartPlus />,
      },
      {
        title: 'Videos',
        path: '/videos',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        title: 'Local Games',
        path: '/localgames',
        icon: <FaIcons.FaEnvelopeOpenText />,
      },
      {
        title: 'About Me',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
      }
]