import { useCount } from "./useCount"

export const Counter=()=>{
    const {count,increment,decrement,reset}=useCount();
    return (
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}