import axios from "axios";

const useAxiosPublic=axios.create({
    baseURL:'https://mistro-boss-server.vercel.app'
})
const useAxioxPublic = () => {
    return useAxiosPublic;
};

export default useAxioxPublic;