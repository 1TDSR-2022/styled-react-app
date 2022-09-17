import React from 'react'
import { DivTarefa } from "../style/styled"
import { FiDelete as X } from 'react-icons/fi'  

export default function Tarefa(props) {
    
    return (
        <DivTarefa>
            <h2>{props.tarefa.titulo}</h2>
            <p>{props.tarefa.setor}</p>
            <p>{props.tarefa.descricao}</p>
            <button onClick={props.remove}><X/></button>
        </DivTarefa>
    );
}
