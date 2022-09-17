import React, { useState } from 'react'
import Tarefa from '../Tarefas/Tarefa'
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
  

    const addTarefa = () => {
      
      //CRIANDO O OBJETO PARA SER ADD NA LISTA
      const novaTarefa = 
      {
        "titulo" : "Planilha de Notas",
        "setor" : "Dep. Graduação",
        "descricao":"Lançar Notas"
      }

      //ADD O OBJ AO STATE
      setTarefa([...tarefa, novaTarefa])
    }
  
    return (
      <DivLista>

      {/* CRIANDO UM DISPARADOR DA FUNC addTarefa */}
      <button onClick={addTarefa}>Adicionar</button>

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