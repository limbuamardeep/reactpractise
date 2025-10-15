import { useGetCat } from "./useGetCat"

export const Cats=()=>{
    const {data,refetchData}=useGetCat();
    return(
        <>
        <h1>{data?.fact}</h1>
        <button onClick={refetchData}>refetch</button>
        </>
    )
}