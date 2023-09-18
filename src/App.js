import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import Footer from './components/Footer';

function App() {
  const productLists=[
    {price: 99999,
      name: "IPhone 10S Max",
      quantity:0,
 },
 {
     price: 9999,
      name: "Redmi Note 10S Max",
      quantity:0,
}
  
  ]
  let [productList ,setProductList]=useState(productLists );
  let[totalAmount,settotalAmount] = useState(0);
  const incrementQuantity = (index)=>{
   let newProductList=[...productList];
   let newtotalAmount= totalAmount;
   newProductList[index].quantity++;
   newtotalAmount+= newProductList[index].price;
      settotalAmount(newtotalAmount);
      setProductList(newProductList);
  }
  const decrementQuantity = (index)=>{
    let newProductList=[...productList];
    let newtotalAmount=totalAmount;
   if( newProductList[index].quantity > 0 )
   {
    newProductList[index].quantity--;
    newtotalAmount-=newProductList[index].price;
   }
      newProductList[index].quantity=0
       setProductList(newProductList);
  }
  return (
   <>
   <Navbar/>
   <main className='container mt-5'>            
   <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
   </main>
   <Footer totalAmount={totalAmount}/> 



   </>
  );
}

export default App;
