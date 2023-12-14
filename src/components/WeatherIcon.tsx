// src/components/Icon.tsx
import React from "react";

interface IconProps {
  iconFile: string;
  width: number;
  height: number;
}

const Icon: React.FC<IconProps> = ({ iconFile, width, height }) => {
  return (
    <div className="">
      <img
        alt="Icon"
        src={iconFile}
        style={{ width: `${width}px`, height: `${height}px` }} // Adjust the width and height as needed
      />
    </div>
  );
};

export default Icon;
