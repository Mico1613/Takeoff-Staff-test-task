import React from "react";

type Props = {};

function ArrowBackSvg({}: Props) {
  return (
    <>
      <svg
        width="45px"
        height="45px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="244 400 100 256 244 112"
          fill="none"
          stroke="#575757"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48px"
        />
        <line
          x1="120"
          y1="256"
          x2="412"
          y2="256"
          fill="none"
          stroke="#575757"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48px"
        />
      </svg>
    </>
  );
}

export default ArrowBackSvg;
