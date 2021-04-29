import * as React from "react";
import { Link } from "react-router-dom";

function BackIcon(props) {
  return (
    <Link to="/">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11 19l-7-7 7-7"
          stroke="#215E99"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default BackIcon;
