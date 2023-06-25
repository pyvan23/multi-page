
"use client"
import React, { useState } from 'react'

export const SideBar = () => {

    const [activeTab, setActiveTab] = useState(1);


    const handleClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  


  return (
  <>
    <aside className="flex flex-col items-center justify-center h-full w-full sm:w-1/4 rounded" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'274\' height=\'568\' fill=\'none\' viewBox=\'0 0 274 568\'%3E%3Crect width=\'274\' height=\'568\' fill=\'%23483EFF\' rx=\'10\'/%3E%3Cmask id=\'a\' width=\'274\' height=\'568\' x=\'0\' y=\'0\' maskUnits=\'userSpaceOnUse\' style=\'mask-type:alpha\'%3E%3Crect width=\'274\' height=\'568\' fill=\'%23fff\' rx=\'10\'/%3E%3C/mask%3E%3Cg mask=\'url(%23a)\'%3E%3Cpath fill=\'%236259FF\' fill-rule=\'evenodd\' d=\'M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z\' clip-rule=\'evenodd\'/%3E%3Cpath fill=\'%23F9818E\' fill-rule=\'evenodd\' d=\'M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z\' clip-rule=\'evenodd\'/%3E%3Cpath stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'bevel\' stroke-width=\'5\' d=\'m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798\'/%3E%3Cpath fill=\'%23FFAF7E\' d=\'M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <ul className="flex flex-col items-center space-y-10 list-none p-2">
          <li className='flex items-center' >
            <div className={`w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => handleClick(1)}>
              1
            </div>
            <div className="ml-2">
              <h3 className="text-black">Título 1</h3>
              <p className="text-gray-400">Subtítulo 1</p>
            </div>
          </li>
          <li className='flex items-center' >
            <div className={`w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 ${activeTab === 2 ? 'active-tab' : ''}`} onClick={() => handleClick(2)}>
              2
            </div>
            <div className="ml-2">
              <h3 className="text-black">Título 2</h3>
              <p className="text-gray-400">Subtítulo 2</p>
            </div>
          </li>
          <li className='flex items-center' >
            <div className={`w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 ${activeTab === 3 ? 'active-tab' : ''}`} onClick={() => handleClick(3)}>
              3
            </div>
            <div className="ml-2">
              <h3 className="text-black">Título 3</h3>
              <p className="text-gray-400">Subtítulo 3</p>
            </div>
          </li>
          <li className='flex items-center' >
            <div className={`w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 ${activeTab === 4 ? 'active-tab' : ''}`} onClick={() => handleClick(4)}>
              4
            </div>
            <div className="ml-2">
              <h3 className="text-black">Título 4</h3>
              <p className="text-gray-400">Subtítulo 4</p>
            </div>
          </li>
        </ul>
      </aside>

  
  
  </>
  )
}
