import React from 'react'

export default function FormTarefa() {
  return (
    <div>
        <form method="post">
            <div>
                <label>Título</label>
                <input type="text" name="titulo" value="" />
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" value="" />
            </div>
            <div>
                <label>Setor</label>
                <textarea name="descricao" cols="30" rows="10" value=""></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}
