import React from 'react';
import Image from 'next/image';

const TopNavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-2 px-2 bg-white">
      <div className="flex items-center space-x-4">
       {/* <Image className='rounded-lg' src="/logo.jpeg" alt="Logo" width={90} height={90} />*/}
        <span className="text-2xl py-3 font-bold text-gray-800 tracking-wider">CUSTOMIZE & CLOTHES</span>      </div>
      <div className="flex items-center space-x-4">
       
      </div>
    </nav>
  );
};

export default TopNavBar;
