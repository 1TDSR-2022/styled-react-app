import React from 'react'
import { DivTarefa } from '../style/styled'



export default function Tarefa(props) {

  return (
    <DivTarefa>
      <h2>{props.tarefa.titulo}</h2>
      <p>{props.tarefa.setor}</p>
      <p>{props.tarefa.descricao}</p>
    </DivTarefa>
  )
}