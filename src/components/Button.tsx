import React, { FC } from 'react'

type ButtonProps = {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button:FC<ButtonProps> = ({className, children, onClick, disabled, type, onMouseEnter, onMouseLeave}) => {
  return (
    <button type={type} disabled={disabled} className={`${className} flex items-center lg:gap-[10px] gap-[7.5px] lg:py-3 lg:px-6 py-2 px-[18px] hover:bg-opacity-90 rounded-[40px]`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;
