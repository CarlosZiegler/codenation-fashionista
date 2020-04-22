import React from 'react'

import LogoFaschinista from '../../assets/FASHIONISTA.svg'
import LanguageIcon from '../../assets/languageIcon.svg'
import UserIcon from '../../assets/iconUser.svg'
import HeartIcon from '../../assets/heartIcon.svg'
import CartIcon from '../../assets/cartIcon.svg'

import './style.css'

export default function Menu() {
    return (

        <nav>
            <div className="logo">
                <a href={"/"}><img src={LogoFaschinista} alt="" /></a>
            </div>

            <ul>
                <li>
                    <a href={"/"}><img src={LanguageIcon} alt="" /></a>
                </li>
                <li>
                    <a href={"/"}><img src={UserIcon} alt="" /></a>
                </li>
                <li>
                    <a href={"/"}><img src={HeartIcon} alt="" /></a>
                </li>
                <li>
                    <a href={"/"}><img src={CartIcon} alt="" /></a>
                </li>
            </ul>
        </nav>

    )
}
