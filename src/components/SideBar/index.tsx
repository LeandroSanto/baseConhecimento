import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';

import './styles.css'

function SideBar(){
 return(
  <div className="sideBarContainer">
   <div id="buttonContainer">
    <Button svg="face" label="perfil" />
    
    <Button svg="home" label="Home" />
    
    <Button svg="search" label="Procurar" />
    <Button svg="add_box" label="Novo Artigo" />
   </div>
  </div>
 )
}

export default SideBar;