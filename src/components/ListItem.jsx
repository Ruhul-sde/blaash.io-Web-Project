import React from 'react'

const ListItem = ({image, duration, productCount}) => {
  return (
    <>
    <div className="w-[22.5vw] h-[10vh] bg-[#22222A] flex items-center gap-4 rounded-xl px-4 mt-5 border border-gray-700 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-10 h-10 bg-[#37383C] rounded-bl-xl flex items-center justify-center cursor-pointer group">
        <div 
          onClick={(e) => {
            const isBlue = e.currentTarget.classList.toggle('bg-blue-500');
            e.currentTarget.classList.toggle('border-blue-500');
            const icon = e.currentTarget.querySelector('svg');
            if (isBlue) {
              icon.classList.remove('opacity-0');
              icon.classList.add('opacity-100');
            } else {
              icon.classList.remove('opacity-100');
              icon.classList.add('opacity-0');
            }
          }}
          className="w-5 h-5 border rounded-lg border-gray-400 overflow-hidden flex items-center justify-center cursor-pointer"
        >
          <svg className="w-3 h-3 text-white opacity-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <img  src={image} alt="product" className="h-16 w-20 object-cover rounded-lg"/>
      <div className="flex flex-col gap-1">
        <h4 className="text-white font-medium">Video Title Name</h4>
        <p className="text-gray-200 text-sm bg-gray-600 rounded-lg w-fit px-2">{duration}</p>
        <span className="text-gray-300 text-sm">Products Attached: {productCount}</span>
      </div>
    </div>
    
    </>
  )
}

export default ListItem