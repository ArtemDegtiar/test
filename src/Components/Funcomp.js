import React from 'react'
import Funccompextend  from './Funccompextend'

 export default function FunComp(props){
     return(
        <div>
            <h1>Func Comp {props.input} </h1>
            <h1><Funccompextend number={props.input.length} /></h1>
            
            
        </div>
     )

 }

 