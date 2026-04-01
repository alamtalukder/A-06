import React from 'react';
import { useState } from 'react';

const ModelCard = ({model, carts, setCarts}) => {
     const [isSubscribed, setIsSubscribed] = useState(false);
     const handleBuyNow = () => {
        setIsSubscribed(true);
        setCarts([...carts, model]);    
     }
    return (
        <div className=' p-8 shadow-lg rounded-lg border'>         
            <div><img className='w-10 h-10' src={model.icon} alt={model.name} /></div>
            <div><h2 className='text-2xl'>{model.name}</h2></div>
            <div><p>{model.description}</p></div>
            <div><h3><span className='font-bold'>${model.price}/</span>{model.period}</h3></div>
            <div>
                <ul>
                    <li>{model.features}</li>
                </ul>
            </div>
            <div>
                <button onClick={handleBuyNow} className='btn btn-primary rounded-full w-full'>{!isSubscribed ? 'Buy Now' : 'Purchase'}</button>
            </div>
        </div>
    );
};

export default ModelCard;