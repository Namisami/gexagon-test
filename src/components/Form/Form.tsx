import React from 'react';
import './Form.css';

export interface FormProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLFormElement> {
  onFormSubmit?: (e: React.FormEvent) => void
}

const Form = ({
  children,
  onFormSubmit,
  ...rest
}: FormProps) => {
  return (
    <form {...rest} className={`form${rest.className ? ` ${rest.className}` : ''}`}
      onSubmit={ onFormSubmit }
    >
      { children }
    </form>
  )
}

export default Form;
