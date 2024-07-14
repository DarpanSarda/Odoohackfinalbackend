import React, {useContext} from 'react'
import SideNavBar from "./components/SideNavBar"
import { AuthContext } from '../AuthContext'
import UserTable from "./components/UsersTable"
import LibrarianTable from './components/LibrarianTable'
import ModelForm from './components/EditModelForm'

const AdminPanel = () => {

    const { isAuthenticated, login, logout, setRightComponentLoad, RightComponentLoad} = useContext(AuthContext);


  return (
    <div>
        <SideNavBar/>
        {
            RightComponentLoad == "UsersComponent" ? <UserTable/>:null
        }
        {
            RightComponentLoad == "LibrarianComponent" ? <LibrarianTable/> : null
        }
    </div>
  )
}

export default AdminPanel