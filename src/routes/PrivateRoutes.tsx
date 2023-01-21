import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from 'src/redux/configStore';

const PrivateRoutes = () => {
  const { myInfo } = useSelector((state: RootState) => state.userReducer);
  const isAuth = myInfo.email

  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes