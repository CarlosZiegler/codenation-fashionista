import React from 'react'

import IconMenu from '../../assets/iconMenu.svg'


import './style.css'

export default function SeachBar(props) {
    const { handlerOnchange } = props
    return (

        <form className="session">
            <div className="container">

                <div className="logo">
                    <a href={"/"}><img src={IconMenu} alt="" /></a>
                </div>

                <div className="container">
                    <input type="text" placeholder="Search" onChange={handlerOnchange}></input>
                </div>
            </div>
        </form>

    )
}
