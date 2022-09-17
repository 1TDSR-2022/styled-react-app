import React from 'react';


export default function components() {
  return (
    <div>
        <form method=''>
            <div>
                <label>Título</label>
                <input type="text" name="titulo" value="" />
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" value="" />
            </div>
            <div>
                <label >Descrição</label>
                <textarea name="descricao" cols="30" rows="10" value=""></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>   
    </div>

)
}
