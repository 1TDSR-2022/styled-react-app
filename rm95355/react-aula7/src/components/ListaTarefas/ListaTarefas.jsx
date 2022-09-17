import React, { useState } from 'react'
import Tarefa from '../Tarefas/Tarefa'
import { DivLista } from '../style/styled'
import FormTarefa from '../FormTarefa/FormTarefa'


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
  
    const [nTarefa, setNTarefa] = useState({"titulo":"","setor":"","descricao":""})

    const addTarefa = (e) => {
      e.preventDefault()
      //LIMPANDO O STATE NTAREFA
      setNTarefa({"titulo":"","setor":"","descricao":""})
      //ADD O OBJ N TAREFA A LISTA DE OBJS
      setTarefa([...tarefa, nTarefa])
    }

    const captura = (e)=>{
      e.preventDefault()

      const{ name , value } = e.target

      if(name === "titulo"){
        setNTarefa({"titulo":value,"setor":nTarefa.setor,"descricao":nTarefa.descricao})
      }else if(name === "setor"){
        setNTarefa({"titulo":nTarefa.titulo,"setor":value,"descricao":nTarefa.descricao})
      }else if(name === "descricao"){
        setNTarefa({"titulo":nTarefa.titulo,"setor":nTarefa.setor,"descricao":value})
      }


    }
  
    return (
      <DivLista>

      {/* FORM DE CAP DE DADOS DO USUARIO */}
      <FormTarefa
        addTarefa={addTarefa}
        tarefa={nTarefa}
        digit={captura}
      />

      {/* CRIANDO UM DISPARADOR DA FUNC addTarefa */}
      {/* <button onClick={addTarefa}>Adicionar</button> */}

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