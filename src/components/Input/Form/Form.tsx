import React from 'react';
import './Form.css';

export interface FormProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLFormElement> {
  
}

const Form = ({
  children,
  ...rest
}: FormProps) => {
  return (
    <form {...rest} className={`form${rest.className ? ` ${rest.className}` : ''}`}>
      { children }
    </form>
  )
}

export default Form;
