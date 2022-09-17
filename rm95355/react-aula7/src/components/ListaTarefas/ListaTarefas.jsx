import React, { useState } from 'react'
import Tarefa from '../Tarefas/Tarefa'
import { DivLista } from '../style/styled'


export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([
    {
      "Título" : "Lista de Pagamento",
      "Setor" : "Dep. de Vendas",
      "Descricao" : "Levantar os valores de vendas"
    },
    {
      "Título" : "Planilha de Salários",
      "Setor" : "Dep. Pessoal",
      "Descricao" : "Gerar Planilhas"
    }
  ])

  return (

    <DivLista>
        <Tarefa
        
        />
    </DivLista>
  )
}