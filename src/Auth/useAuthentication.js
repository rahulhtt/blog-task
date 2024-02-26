import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const useAuthentication = (isAuthenicate) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isAuthenicate) {
            navigate('/')
        }
    }, [isAuthenicate])
    return isAuthenicate
}
export default useAuthentication
