import React,{createContext} from 'react'
import {useState} from 'react'
import ChildA from './components/ChildA';
import CounterFun from './components/CounterFun';
import CounterHover from './components/CounterHover';
import CounterClick from './components/CounterClick';
import CounterPropsRendering from './components/CounterPropsRendering';
import Manish from './components/Manish'
import Sanjay from './components/Sanjay';
import Form from './components/Form';
import {Routes, Route} from 'react-router-dom'
import Home from './routerComponents/Home';
import About from './routerComponents/About';
import Navbar from './routerComponents/Navbar';
import NoMatch from './routerComponents/NoMatch';
import Product from './routerComponents/Product';
import FeaturedProducts from './routerComponents/FeaturedProducts';
import NewProducts from './routerComponents/NewProducts';
import Users from './routerComponents/Users';
import DetailUser from './routerComponents/DetailUser';
import Lifecycleone from './components/lifeCycleOne';
const FirstName =createContext()

function App() {
  // const [name , setName]=useState('Manish')
  // const changeName =(text)=>{
  //   setName(text)
  // }

  
  const [show, setShow]=useState(false)
  const [textToButton, setTextToButton]=useState("click to show LifeCycle")
  
  const toggleFun =()=>{
    setShow(!show)
    if(show){
      setTextToButton("click to show LifeCycle")
    }
    else{
      setTextToButton("click to hide LifeCycle")
    }
  }
  
  return (
    <>
      <FirstName.Provider value={"Manish Dodeja"}>
         {/* <h1>Hello</h1> */}
        {/* <ChildA Name={name} changeName={changeName}/> */}
        <ChildA />
      </FirstName.Provider> 
    
      <CounterFun />

      <Manish />
      <Sanjay />

      <CounterPropsRendering
        render={(count, increment)=>(
          <CounterClick count={count} increment={increment}/>
        )}
      />

      <CounterPropsRendering
        render={(count, increment)=>(
          <CounterHover count={count} increment={increment}/>
        )}
      />
      

      <Form/>

      <Navbar/>    
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='product' element={<Product/>}>
                <Route index element={<FeaturedProducts/>}/>
                <Route path='featured' element={<FeaturedProducts/>}/>
                <Route path='new' element={<NewProducts/>}/>
            </Route>
            <Route path="/users" element={<Users/>}>
              <Route path=":userId" element={<DetailUser/>}/>  
            </Route>
            <Route path="*" element={<NoMatch/>}/> 
        </Routes>

        {show ? <Lifecycleone/> : null}
        <button onClick={toggleFun} value={textToButton} >Click to show LifeCycle One</button>


    </>
  )
}

export default App;
export {FirstName}