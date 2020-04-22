import React from 'react'

import IconMenu from '../../assets/iconMenu.svg'


import './style.css'

export default function SeachBar() {
    return (

        <div className="session">
            <div className="container">

                <div className="logo">
                    <a href={"/"}><img src={IconMenu} alt="" /></a>
                </div>

                <div className="container">
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>
        </div>

    )
}
