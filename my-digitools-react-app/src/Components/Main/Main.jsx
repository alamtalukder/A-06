import React from 'react';

const Main = () => {
    return (
        <div className="bg-[#8f17f9] mx-auto px-4 py-20 text-center space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-lg text-zinc-500 mb-6">
            Join thousands of professionals who are already using Digitools to work smarter.
            Start your free trial today.</p>

            <div className="flex justify-center gap-4">
                <button className="btn btn-primary rounded-full text-white">Explor Product</button>
                <button className="btn btn-secondary rounded-full text-black">View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Main;