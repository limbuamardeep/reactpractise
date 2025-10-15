import { useQuery } from "@tanstack/react-query"; 
import axios from "axios";
export const useGetCat=()=>{
    const {data,refetch}=useQuery({
        queryKey:["cat"],
        queryFn:async ()=>{
            const res=await axios.get("https://catfact.ninja/fact")
            return res.data
        }
    })
    const refetchData=()=>{
        alert("data refetched");
        refetch();
    }
    return {data,refetchData}
}