import React from 'react';

const ToolsNavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 p-2 shadow-md montserrat-300">
      <ul className="flex space-x-4">
        {['NEW IN','BAGS','ACCESSORIES'].map((item) => (
          <li key={item} className="hover:text-red-500  text-sm cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-1 rounded-md"
        />
        <button className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            0
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default ToolsNavBar;
