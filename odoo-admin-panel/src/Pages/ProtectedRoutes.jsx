// import { defaults } from 'autoprefixer'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Pages/AuthContext';


const PrivateRoutes = () => {
    let { auth } = useAuth()
    return (
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes
