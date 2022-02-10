import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function resultsPage() {
  return <div className=" ">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900">
        <Navbar />
      </div>

      <main>
        <ProductCard/>
      </main>
      
  </div>;
}

export default resultsPage;
