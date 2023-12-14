/* eslint-disable prettier/prettier */
import React from "react";
interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({
 title 
}) => {
    return (
      <div className="bg-slate-200 bg-gray-light/50 py-3 ">
        <div className="container mx-auto ">
          <div className="flex flex-row">
          
           
                
                    <div className="px-4">
                      <p className="text-lg capitalize">{title}</p>
                    </div>
                  
          </div>
        </div>
      </div>
    )
}
export default Header;