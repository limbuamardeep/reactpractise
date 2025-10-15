import {useQuery} from "@tanstack/react-query"
import { fetchdata } from "../App";
import "./Table.css"
import Search from "./Search";
const Table=()=>{
    const {data,isLoading,isError}=useQuery(
        {
            queryKey:["userdata"],
            queryFn:()=>fetchdata()
        }
    )
    if(isLoading){
        return(
            <div className="spinner"></div>
        )
    }
    if(isError){
        return<h1>Error</h1>
    }


    
    return(
        <div>
            <table className="tabledata">
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>Title</th>
                    <th>body</th>
                </tr>
                {data!=null&& (
                    data.map((item,key)=>{
                        console.log(item.id)
                        return(
                        <tr key={key}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    )    
                })

                )}
            </table>
        </div>
    )
}
export default Table;