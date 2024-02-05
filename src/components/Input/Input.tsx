import React from 'react';
import './Input.css';

export interface InputProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  type?: string
  placeholder?: string
}

const Input = ({
  children,
  type='text',
  placeholder=`Введите ${children?.toString().toLowerCase()}`,
  ...rest
}: InputProps) => {
  return (
    <div {...rest} className={`input${rest.className ? ` ${rest.className}` : ''}`}>
      <label className='input__label'>{ children }</label>
      <input className='input__field' type={ type } placeholder={ placeholder } />
    </div>
  )
}

export default Input;
