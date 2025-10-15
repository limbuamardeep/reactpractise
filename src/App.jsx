import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Table from './pages/Table'
import Search from './pages/Search'
import { Forms } from './pages/Forms'
import { set } from 'react-hook-form'
import { useToggle } from './useToggle'
import { Cats } from './pages/Cats'
import { Counter } from './pages/Counter'
export const fetchdata=async (id)=>{
  const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  return res.data;
}
function App() {
  const {state,toggle}=useToggle()
  const client=new QueryClient();
  return (
    <>
    <div>
      <button onClick={toggle}>{state?"hide":"show"}</button>
      {state && <h1>Hidden Text</h1>}
    </div>
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path='/table' element={<Table />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/form' element={<Forms />}/>
          <Route path='/cats' element={<Cats />}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
