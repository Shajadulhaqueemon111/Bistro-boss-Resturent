import { useContext } from "react";
import useAdmine from "../adminw/useAdmine";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdmineRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
   const [isAdmin,isAdmineLoading]=useAdmine()
   const location=useLocation()

   if(loading || isAdmineLoading){
       return <span className="loading loading-bars loading-lg"></span>
   }

   if(user && isAdmin){
       return children
   }
   return<Navigate to='/login' state={{from:location}} replace></Navigate> 
       
};
  


export default AdmineRoute;