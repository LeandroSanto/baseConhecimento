import React from 'react';

import Input from '../../components/Input';

function Login(){
 return(
  <div className='container'>
   <Input name="user" label="Usuário" />
   <Input name="password" label="Senha" type="password"/>  
  </div> 
 )
}

export default Login; 