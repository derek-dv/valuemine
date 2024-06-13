

// ------------------components--------------
import {Route, Routes} from 'react-router-dom'
import SupportPage from './pages/SupportPage'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './pages/Products';
import News from './pages/News';
import CreatePost from './pages/CreatePost';
import ContactUs from './pages/Contact';
import BlogDetails from './components/Blog/BlogDetail';
import PostDetail from './components/Posts/PostDetail';


function App() {
  return (
    <>
     
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<News />} />
          <Route path="/support/create-post" element={<CreatePost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails  />} /> 
          <Route path="/post/:id" element={<PostDetail  />} /> 
          </Routes>
        </ScrollToTop>
      
    
    </>
  );
}

export default App;
