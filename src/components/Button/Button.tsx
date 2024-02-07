import React from 'react';
import './Button.css';

export interface ButtonProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  onButtonClick, 
  ...rest
}: ButtonProps) => {
  return (
    <button onClick={ onButtonClick } { ...rest } className={`button${ rest.className ? ` ${rest.className}` : '' }`}>
      { children }
    </button>
  )
}

export default Button;
