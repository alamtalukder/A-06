import React, {use} from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Model = ({modelPromise, carts, setCarts}) => {
   const models = use (modelPromise);
  
    return (
        <div className='py-20 max-w-7xl mx-auto'>
            <div className="text-center" >
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 p-10'>
                {
                    models.map((model)=> <ModelCard key={model.id} model={model} carts = {carts} setCarts = {setCarts} />)
                }
            </div>
        </div>
    );
};

export default Model;