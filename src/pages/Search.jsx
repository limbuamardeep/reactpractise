import { useQuery } from "@tanstack/react-query";
import { fetchdata } from "../App";
import { useState } from "react";
import "./Table.css"
import Table from "./Table";
const Search=()=>{
  
    const[searchQuery,setSearchQuery]=useState("");
    const {data,isLoading, isError}=useQuery(
        {
            queryKey:["searchedata"],
            queryFn:()=>fetchdata()
        }
    )
    if(isLoading){
        return <div className="spinner"></div>//to make  spinner 
    }
    if(isError){
        return<h1>Error Loading</h1>
    }
    const searchedata= searchQuery? data?.filter((item)=>item.title.toLowerCase().startsWith(searchQuery.toLowerCase())):data//using filter to search data
    return(
        <div>
        <input type="text" onChange={(e)=>{
            setSearchQuery(e.target.value);
            
            } } default ="Search using title..."></input>
        {/* <button onClick={()=>setInData(newInData)}>Search</button> */}
        <table>
            <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
            </tr>
            {searchedata?.map((item,key)=>{
                return(
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
                )
            })}

        </table>
      
            
        </div>

    )
}
export default Search;