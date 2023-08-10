import React from "react"
import { IconProps } from ".."

const IconXMark: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 15L15 5M5 5L15 15"
        className={
          iconColorClassName ||
          "stroke-medusa-icon-subtle dark:stroke-medusa-icon-subtle-dark"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconXMark
