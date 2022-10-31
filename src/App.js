import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFoundPage from "./pages/NotFoundPage"
import User from "./components/User"

import {GithubContext} from "./githubcontext/GithubContext"
 
function App() {
  // console.log(process.env.REACT_APP_GITHUB_URL);
  return (
    <GithubContext>
        <Router>
            <div className="container">
              <Navbar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home/>}/>

                  <Route path="/about" element={<About/>} />

                  <Route path="/user/:user" element={<User/>}/>

                  <Route path="/notFound" element={<NotFoundPage/>} />

                  <Route path="/*" element={<NotFoundPage/>} />
                </Routes>
              </main>
              <Footer/>
            </div>
        </Router>
    </GithubContext> 
        
       
  )
}

export default App   
