import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

const App = () => {
return (
  <div>
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Partners/>
    <Footer/>
  </div>
)
}

export default App
