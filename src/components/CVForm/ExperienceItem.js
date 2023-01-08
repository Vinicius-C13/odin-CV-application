import React from "react";
import Button from "../Utils/Button";

export default function ExperienceItem(props){

    const {cargo, empresa, cidade, inicio, fim, handleChange, id, removeField} = props

    return(
        <div>
            <div>
                <input type="text" name="cargo" value={cargo} onChange={(e) => handleChange(e, id)} placeholder="Cargo"/>
                <br/>
                <input type="text" name="empresa" value={empresa} onChange={(e) => handleChange(e, id)} placeholder="Empresa"/>
                <br/>
                <input type="text" name="cidade" value={cidade} onChange={(e) => handleChange(e, id)} placeholder="Cidade"/>
                <br/>
                <input type="text" name="inicio" value={inicio} onChange={(e) => handleChange(e, id)} placeholder="Início"/>
                <br/>
                <input type="text" name="fim" value={fim} onChange={(e) => handleChange(e, id)} placeholder="Fim"/>
                <br/>
                <br/>
                <Button text='Delete' handleClick={() => removeField(id)}/>
            </div>
            <br/>
        </div>
    )
}