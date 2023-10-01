import React from "react"

interface TextIconIProps {
  text: string
  strokeDasharray?: number
  strokeDashoffset?: number
  animation?: string
  className?: string
}

const TextIcon = ({ text, strokeDasharray, strokeDashoffset, animation, className }: TextIconIProps) => {
  return (
    <svg
      height="120"
      width="100%"
      stroke="#fff"
      strokeWidth="1"
      strokeDasharray={strokeDasharray}
      strokeDashoffset={strokeDashoffset}
      className={animation}
    >
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className={className}>
        {text}
      </text>
    </svg>
  )
}

export default TextIcon
