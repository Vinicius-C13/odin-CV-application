import React from "react";

export default function Personal(props) {

    return(
        <div style={props.style.form_general}>
            <h2>Personal Information</h2>
            <div style={props.style.inputs}>
                <input type="text" name="nome" value ={props.cv.nome} onChange = {props.handleChange} placeholder="Nome"/>
                <input type="text" name="sobrenome" value = {props.cv.sobrenome} onChange = {props.handleChange} placeholder="Sobrenome"/>
                <input type="text" name="objetivo" value = {props.cv.objetivo} onChange = {props.handleChange} placeholder="Objetivo"/>
                <input type="text" name="endereco" value = {props.cv.endereco} onChange = {props.handleChange} placeholder="Endereço"/>
                <input type="tel" name="telefone" value = {props.cv.telefone} onChange = {props.handleChange} placeholder="Telefone"/>
                <input type="email" name="email" value = {props.cv.email} onChange = {props.handleChange} placeholder="Email"/>
                <textarea name="detalhes" value = {props.cv.detalhes} onChange = {props.handleChange} placeholder="detalhes"></textarea>
            </div>
        </div>
        
    )
}