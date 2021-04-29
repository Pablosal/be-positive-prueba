import React from "react";
const GoogleIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.546 9.669l-.557 2.079-2.036.043A7.964 7.964 0 010 8a7.96 7.96 0 01.895-3.68l1.812.333.794 1.801a4.755 4.755 0 00.045 3.215z"
        fill="#FBBB00"
      />
      <path
        d="M15.86 6.505a8.015 8.015 0 01-.035 3.165 7.998 7.998 0 01-2.817 4.569l-2.283-.117-.323-2.017a4.767 4.767 0 002.052-2.435H8.176V6.505H15.86z"
        fill="#518EF8"
      />
      <path
        d="M13.008 14.238A7.967 7.967 0 018 16a7.999 7.999 0 01-7.047-4.209L3.546 9.67a4.757 4.757 0 006.856 2.436l2.606 2.133z"
        fill="#28B446"
      />
      <path
        d="M13.106 1.842l-2.591 2.121A4.758 4.758 0 003.5 6.454L.895 4.321A7.998 7.998 0 018 0c1.941 0 3.72.691 5.106 1.842z"
        fill="#F14336"
      />
    </svg>
  );
};

export default GoogleIcon;