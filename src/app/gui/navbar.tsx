import React from 'react';
import Image from 'next/image';

const TopNavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-2 px-12 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Image className='rounded-lg' src="/logo.jpeg" alt="Logo" width={90} height={90} />
        <span>Customize & Clothes</span>
      </div>
      <div className="flex items-center space-x-4">
       
      </div>
    </nav>
  );
};

export default TopNavBar;
