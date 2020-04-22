import React from 'react'

import './style.css'

export default function card({ product }) {
    const { name, style, code_color, color_slug, color, on_sale, regular_price, actual_price, discount_percentage, installments, image, sizes } = product

    if (image) {
        return (
            <figure>
                <img src={image} alt="code_color" />
                <h6>{name}</h6>
                <p>{regular_price}</p>
            </figure>

        )
    }

    return (null)
}
