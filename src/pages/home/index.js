import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import axios from 'axios'

import Menu from '../../components/menu'
import SearchBar from '../../components/searchBar'
import Catalog from '../../components/catalog'

import './style.css'


export default function Home() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState({})





    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get('https://carlosziegler.now.sh/api/fashionista')
            setProducts(response.data.products)
        }

        try {
            fetchProducts()
        } catch (error) {
            setError(error)
        }


    }, [])

    return (
        <>
            <Menu />
            <SearchBar />
            {products.length > 0 && <Catalog products={products} />}
        </>
    )
}

