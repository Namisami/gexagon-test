import React from 'react';
import './Button.css';

export interface ButtonProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  
}

const Button = ({
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button { ...rest } className={`button${ rest.className ? ` ${rest.className}` : '' }`}>
      { children }
    </button>
  )
}

export default Button;
