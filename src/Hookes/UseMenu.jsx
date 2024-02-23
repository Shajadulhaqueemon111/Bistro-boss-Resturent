import { useQuery } from "@tanstack/react-query";
import useAxioxPublic from "./useAxioxPublic";



const UseMenu = () => {
    const axiosPublic=useAxioxPublic()
    // const [menu, setMenu] = useState([]);
    // const [loading,setLoading]=useState(true)
    // useEffect(() => {
    //     fetch('https://mistro-boss-server.vercel.app/menu')
    //         .then(res => res.json())
            
    //         .then(data => {
    //             // const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return[menu,loading,refetch]
};

export default UseMenu;