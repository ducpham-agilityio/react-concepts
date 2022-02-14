import { memo } from "react"

interface ButtonProps {
  children: React.ReactNode;

  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="mx-2 my-2 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs" onClick={onClick}>
      {children}
    </button>
  )
}

export default memo(Button);
