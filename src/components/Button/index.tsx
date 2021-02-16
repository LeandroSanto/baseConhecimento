import React, {ButtonHTMLAttributes} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
 label: string;
 svg: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({label,svg,...rest})=>{
 return(
  <button className="button-block">
    <i className="material-icons">{svg}</i>
    <label>
      {label}
    </label>
 </button>
)
}
export default Button;