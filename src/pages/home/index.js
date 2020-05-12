import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';

import api from '../../services/api'
import searchData from '../../utils/searchData'
import loadingData from '../../assets/loading.json'
import loadingErrorData from '../../assets/error.json'

import Menu from '../../components/menu'
import SearchBar from '../../components/searchBar'
import Catalog from '../../components/catalog'

import './style.css'

export default function Home() {
    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,

    }
    const defaultErrorOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingErrorData,

    }

    useEffect(() => {

        async function fetchProducts() {
            const response = await api('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
            setTimeout(() => {
                setProducts(response)
                setShowProducts(response)
                setIsloading(false)
            }, 1000)

        }

        try {
            fetchProducts()
        } catch (error) {
            console.log(error)
            setError(error)
        }


    }, [])

    //Real time seaching
    const handlerSearchOnChange = async (event) => {
        const result = searchData(products, event.target.value)
        setShowProducts(result)
    }

    if (error) {
        return (
            <div className="loading">
                <Lottie className="lottieFile" options={defaultErrorOptions}
                    height={"100%"}
                    width={"100%"}
                />
            </div>
        )
    }

    return (
        <>
            <Menu />
            <SearchBar handlerOnchange={handlerSearchOnChange} />
            {isloading &&
                <div className="loading">
                    <Lottie className="lottieFile" options={defaultOptions}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>}
            {showProducts.length > 0 && <Catalog products={showProducts} />}
        </>
    )
}

