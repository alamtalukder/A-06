import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((total, item) => total + item.price, 0);
    console.log(carts); 

    const handlePayment = () => {
        setCarts([]);
    }
    const handleRemove = (id) => {
        const updatedCarts = carts.filter(item => item.id !== id);
        setCarts(updatedCarts);
        toast.info("Item removed from cart.");
    }
    return (
        <div className='p-10 max-w-5xl mx-auto mt-10 border rounded-2xl mb-10'>
            <h1 className='text-2xl font-bold mb-5'>Your Cart</h1> 
            <div className='space-y-7 mb-5'>
                {
                    carts.length === 0 && <p className='text-2xl '>Your cart is empty.</p>
                }
            {
                carts.map((item) => (
                    <div className='flex items-center bg-gray-100 justify-between border rounded-lg p-6' key={item.id}>
                        <div className='flex items-center gap-2'>
                            <div><img className='w-13 bg-white rounded-full p-3 h-13 object-contain' src={item.icon} alt={item.name} /></div>
                            <div>
                                <h2 className='text-lg '>{item.name}</h2>
                                <p>${item.price}</p>
                            </div>                           
                        </div>
                        <button onClick={() => handleRemove(item.id)} className='text-red-500 hover:text-red-700'>Remove</button>
                    </div>
                ))
            }
              <div className='flex justify-between items-center pt-5'>
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
                <button onClick={handlePayment} className='btn btn-primary bg-red-600 rounded-full w-full mt-5'>Proceed to Checkout</button> 
            </div>
    );
};

export default Cart;