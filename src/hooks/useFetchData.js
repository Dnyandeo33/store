import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../redux/productSlice"

const useFetchData = (endpoint) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts(endpoint))

    }, [dispatch, endpoint])
}

export default useFetchData