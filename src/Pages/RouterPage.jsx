import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeOne from './HomeOne'
import About from './About'
import LoadTop from '../Components/LoadTop'
import Destination from './Destination'
import DestinationDetails from './DestinationDetails'
import Error from './Error'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Contact from './Contact'
import AIChat from './AIChat'
function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/error" element={<Error />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ai-chat" element={<AIChat />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage