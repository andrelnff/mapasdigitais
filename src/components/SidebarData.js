import React from "react";
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Navegar',
        path: '/wsmaps',
        icon: <AiIcons.AiOutlineEnvironment/>,
        cName: 'nav-text'
    },
    {
        title: 'Estatisticas',
        path: '/statistics',
        icon: <AiIcons.AiOutlineFund/>,
        cName: 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Creditos',
        path: '/credits',
        icon: <AiIcons.AiOutlinePicRight/>,
        cName: 'nav-text'
    },
]