import React from 'react'



 
const FunctionalComponent = (props) => {

    const {nome, tarefa} = props;

   return (
       <li>{nome} trará {tarefa}</li>
   )
}
 
export default FunctionalComponent