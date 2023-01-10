import React from "react";
import Button from "../Utils/Button";

export default function ExperienceItem(props){

    const {cargo, empresa, cidade, inicio, fim, detalhes, handleChange, id, style, removeField} = props

    return(
        <div style={style}>
            <input type="text" name="cargo" value={cargo} onChange={(e) => handleChange(e, id)} placeholder="Cargo"/>
            <input type="text" name="empresa" value={empresa} onChange={(e) => handleChange(e, id)} placeholder="Empresa"/>
            <input type="text" name="cidade" value={cidade} onChange={(e) => handleChange(e, id)} placeholder="Cidade"/>
            <input type="text" name="inicio" value={inicio} onChange={(e) => handleChange(e, id)} placeholder="Início"/>
            <input type="text" name="fim" value={fim} onChange={(e) => handleChange(e, id)} placeholder="Fim"/>
            <textarea name="detalhes" value={detalhes} onChange={(e) => handleChange(e, id)} placeholder="Detalhes"></textarea>
            <Button text='Delete' handleClick={() => removeField(id)}/>
        </div>
    )
}