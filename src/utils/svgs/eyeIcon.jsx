import React from "react"

function EyeIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 14a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#C7CAD9"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 6c-3.9 0-7.4 2.1-9.3 5.2-.1.2-.1.5 0 .8 1.9 3.1 5.4 5.2 9.3 5.2 3.9 0 7.4-2.1 9.3-5.2.1-.2.1-.5 0-.7-1.9-3.2-5.3-5.3-9.3-5.3z"
        stroke="#C7CAD9"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EyeIcon
