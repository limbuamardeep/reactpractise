import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Table from './pages/Table'
import Search from './pages/Search'
export const fetchdata=async (id)=>{
  const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  return res.data;
}
function App() {
  const client=new QueryClient();
  return (
    <>
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path='/table' element={<Table />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
