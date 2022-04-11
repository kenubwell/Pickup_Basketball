import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons5 from 'react-icons/io5';

export const SideBarData = [
    {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/default"
    },
    {
        title: 'Courts',
        path: '/courts',
        icon: <GiIcons.GiBasketballBasket />,
      },
      {
        title: 'Calendar',
        path: '/',
        icon: <IoIcons.IoIosPaper  />,
      },
      {
        title: 'HoCo Videos',
        path: '/videos',
        icon: <FaIcons.FaVideoSlash />,
      },
      {
        title: 'Local Games',
        path: '/localgames',
        icon: <IoIcons5.IoPeopleSharp />,
      },
      {
        title: 'About Me',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
      }
]