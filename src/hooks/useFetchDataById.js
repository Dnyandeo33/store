import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProductById } from "../redux/productSlice"

const useFetchDataById = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(id))

    }, [dispatch, id])
}

export default useFetchDataById