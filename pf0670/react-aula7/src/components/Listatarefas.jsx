import React,{ useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'


export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([
    {
      "titulo" : "Lista de Pagamento",
      "setor" : "Dep. de Vendas",
      "descricao":"Levantar os vvalorres de vendas"
    }
    ,
    {
      "titulo" : "Planilha de Salários",
      "setor" : "Dep. Pessoal",
      "descricao":"Gerar Planilhas"
    }
  ])


  return (
    <DivLista>
      {tarefa.map((tar,i)=>
        <Tarefa
          key={i}
          //Enviando apenas o objeto
          tarefa={tar}
          //Enviando os atributos separados
          // titulo={tar.titulo}
          // setor={tar.setor}
          // descricao={tar.descricao}
        />
      )}

    </DivLista>
  )
}
