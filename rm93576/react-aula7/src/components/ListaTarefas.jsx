import React, { useState } from 'react'
import Tarefa from "./Tarefa.jsx"
import { DivLista } from '../style/styled.js'

export default function ListaTarefas() {
  
  const [tarefa,setTarefa] = useState([
    {
      "titulo" : "Lista de Pagamento", 
      "setor" : "Dep. de Vendas", 
      "descricao" : "Levantar os valores de vendas " 
    }
    ,
    {
      "titulo" : "Planilha de Salários", 
      "setor" : "Dep. Pessoal", 
      "descricao" : "Gerar Planilhas " 
    }

  ])

  return (
    <DivLista>
        <p>Lista de Tarefas</p>
        <Tarefa
        
        />
    </DivLista>
  )
}