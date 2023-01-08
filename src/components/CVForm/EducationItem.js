import React from "react";
import Button from "../Utils/Button";

export default function EducationItem(props){
    const {universidade, curso, cidade, inicio, fim, id, handleChange, removeField} = props
    return(
        <div>
            <div>
                <input type="text" name="universidade" value={universidade} onChange={(e) => handleChange(e, id)} placeholder="Universidade"/>
                <br/>
                <input type="text" name="curso" value={curso} onChange={(e) => handleChange(e, id)} placeholder="Curso"/>
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