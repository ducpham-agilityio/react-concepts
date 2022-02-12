import { useEffect, useState } from "react";

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ value: checked, onChange }: ToggleProps) {
  const classesByState = {
    checked: "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full",
    unchecked: "absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out",
  };

  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label htmlFor="unchecked" className="mt-3 inline-flex items-center cursor-pointer">
      <span className="relative" onClick={handleChange}>
        <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
        <span className={checked ? classesByState.checked : classesByState.unchecked}>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="absolute opacity-0 w-0 h-0"
          />
        </span>
      </span>
    </label>
  );
}