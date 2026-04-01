import React from 'react';

const Cart = ({carts}) => {
    console.log(carts); 
    return (
        <div>
            <h1>Your Cart</h1> 
            <div className='space-y-5 mt-4'>
                {
                    carts.map((item) => (
                        <div className='flex items-center justify-between border rounded-lg p-3' key={item.id}>
                           <div className='flex items-center gap-2'>
                                <div><img className='w-10 h-10 object-contain' src={item.icon} alt={item.name} /></div>
                                <div><h2 className='text-lg font-bold'>{item.name}</h2></div>
                            <div>
                                <h3><span className='font-bold'>${item.price}/</span>{item.period}</h3>
                           </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;