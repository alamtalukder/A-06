import './App.css'
import NavBar from '../src/Components/NavBar/NavBar'
import Banner from '../src/Components/Banner/Banner'
import Model from '../src/Components/Model/Model'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'


const getModels = async () => {
  const res = await fetch('../public/ToolsData.json')
  const data = await res.json()
  return data
}

const modelPromise = getModels();; 
function App() {
 const [activeTab, setActiveTab] = useState('models'); 
 const [carts, setCarts] = useState([]);
 console.log(carts); 
  return (
    <>
      <NavBar />

      <Banner />

  
      <div className="tabs tabs-box justify-center mt-10">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab('models')} defaultChecked 
        />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab('cart')} />
      </div>
      {activeTab === 'models' && <Model modelPromise = {modelPromise} carts = {carts} setCarts = {setCarts} />}
      {activeTab === 'cart' && <Cart carts = {carts} setCarts = {setCarts} />}


      <Main />
        
      <Footer />
    </>
  )
}

export default App
