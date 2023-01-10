import React from "react";
import Button from "../Utils/Button";

export default function EducationItem(props){
    const {universidade, curso, cidade, inicio, fim, id, detalhes, style, handleChange, removeField} = props
    return(
        <div style={style}>
            <input type="text" name="curso" value={curso} onChange={(e) => handleChange(e, id)} placeholder="Curso"/>
            <input type="text" name="universidade" value={universidade} onChange={(e) => handleChange(e, id)} placeholder="Universidade"/>
            <input type="text" name="cidade" value={cidade} onChange={(e) => handleChange(e, id)} placeholder="Cidade"/>
            <input type="text" name="inicio" value={inicio} onChange={(e) => handleChange(e, id)} placeholder="Início"/>
            <input type="text" name="fim" value={fim} onChange={(e) => handleChange(e, id)} placeholder="Fim"/>
            <textarea name="detalhes" value={detalhes} onChange={(e) => handleChange(e, id)} placeholder="Detalhes">{detalhes}</textarea>
            <Button text='Delete' handleClick={() => removeField(id)}/>
        </div>
    )
}