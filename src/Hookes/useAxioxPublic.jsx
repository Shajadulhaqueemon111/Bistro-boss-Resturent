import axios from "axios";

const useAxiosPublic=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxioxPublic = () => {
    return useAxiosPublic;
};

export default useAxioxPublic;