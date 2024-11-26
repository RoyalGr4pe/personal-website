import React from 'react';

const Forest = () => {
  return (
      <div className="relative w-full h-[400px] sm:w-[500px] sm:h-[500px]">
        {/* Background / River <img src="/contact/river.svg" alt="River" className="river" />*/}
    
        {/* Tree */}
		<img src="/contact/tree.svg" alt="Tree" className="absolute bottom-0" />
        
        
        {/* Deer */}
        <img src="/contact/deer.svg" alt="Deer" className="absolute bottom-0" />
        
        {/* Bird */}
        <img src="/contact/eagle.svg" alt="Bird" className="absolute right-0" />
      </div>
  );
};

export default Forest;
