import * as React from "react"

const BuyIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 1 1 3.7v9.45c0 .746.597 1.35 1.333 1.35h9.334c.736 0 1.333-.604 1.333-1.35V3.7L11 1H3Z"
      clipRule="evenodd"
      opacity={0.737}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4.375h12M10 7c0 1.243-1.175 2.25-2.625 2.25S4.75 8.243 4.75 7"
      opacity={0.737}
    />
  </svg>
)
export default BuyIcon;