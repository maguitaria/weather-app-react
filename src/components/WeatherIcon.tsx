// src/components/Icon.tsx
import React from "react";

interface IconProps {
  iconFile: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconFile, width, height, className }) => {
  return (
    <div className="">
      <img
        alt="Icon"
        src={iconFile}
        className={className}
        style={{ width: `${width}px`, height: `${height}px` }} // Adjust the width and height as needed
      />
    </div>
  );
};

export default Icon;
