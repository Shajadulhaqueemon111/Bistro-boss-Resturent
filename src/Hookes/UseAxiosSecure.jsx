import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Auth/AuthProvider";
 const axiosSecure=axios.create({
    baseURL:'https://mistro-boss-server.vercel.app'
})
const UseAxiosSecure = () => {
   const navigate = useNavigate();
   const { logOut } =useContext(AuthContext);
   axiosSecure.interceptors.request.use(function(config){
      const token=localStorage.getItem('access token')
      console.log('requiest stoped by interceptor',token)
      config.headers.authorization =`Bearer ${token}`
      return config;
   
   },function(error){
      return Promise.reject(error)
   })

   axiosSecure.interceptors.response.use(function (response) {
      return response;
  }, async (error) => {
      const status = error.response.status;
      
      if (status === 401 || status === 403) {
          await logOut();
          navigate('/login');
      }
      return Promise.reject(error);
  })

   return axiosSecure
};

export default UseAxiosSecure;