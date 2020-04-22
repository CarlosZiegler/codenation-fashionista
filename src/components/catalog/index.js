import React from 'react'

import './style.css'

import Card from '../card'

export default function catalog({ products }) {
    return (

        <>
            <div className="content">
                {products.length > 0 && products.map((product, index) => <Card product={product} key={index} />)}

            </div>
        </>

    )
}
