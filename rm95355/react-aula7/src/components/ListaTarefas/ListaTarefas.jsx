import React from 'react'
import Tarefa from '../Tarefas/Tarefa'
import { DivLista } from '../style/styled'

export default function ListaTarefas() {

  return (

    <DivLista>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}