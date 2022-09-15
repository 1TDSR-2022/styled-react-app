import React from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../Style/styled'
export default function ListaTarefas() {
  return (
    <div>
        <p>Lista de Tarefas</p>
        <DivLista>
            <Tarefa/>
            <Tarefa/>
            <Tarefa/>
        </DivLista>
    </div>
  )
}
