import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Request from "./pages/Request.jsx";
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import CreatePosts from "./pages/CreatePosts.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ChosenPost from "./pages/ChosenPost.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/request' element={<Request/>}/>
              <Route path='/create' element={<CreatePosts/>}/>
              <Route path='*' element={<ErrorPage/>}/>
              <Route path="/request/:dataId" element={<ChosenPost/>}/>
          </Route>
      </Routes>

    </>
  )
}

export default App
