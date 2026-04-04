import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Check } from 'lucide-react';

const ModelCard = ({model, carts, setCarts}) => {
     const [isSubscribed, setIsSubscribed] = useState(false);
     const isFinded = carts.find(item => item.id === model.id);
     const handleBuyNow = () => {
        if(isFinded){
        toast.error("Item already in cart!");
        return ; 
     }
        setIsSubscribed(true);
        setCarts([...carts, model]);
        toast.success("Item added to cart!");
    };
    return (
        <div className=' p-8 shadow-lg rounded-lg border space-y-2'>         
            <div><img className='w-10 h-10' src={model.icon} alt={model.name} /></div>
            <div><h2 className='text-2xl'>{model.name}</h2></div>
            <div><p>{model.description}</p></div>
            <div><h3><span className='font-bold'>${model.price}/</span>{model.period}</h3></div>
            <div>
                <ul>
                    {model.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <Check className='w-5 h-5 text-green-500' />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-7'>
                <button onClick={handleBuyNow} className='btn btn-primary rounded-full w-full'>{!isSubscribed ? 'Buy Now' : 'Purchase'}</button>
            </div>
        </div>
        
    );
};

export default ModelCard;