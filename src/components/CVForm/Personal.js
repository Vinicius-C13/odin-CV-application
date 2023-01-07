import React from "react";

export default function Personal(props) {

    function showValue(e) {
        alert(e.target.value);
    }

    return(
        <>
            <h2>Personal Information</h2>
            <input type="text" name="nome" value ={props.cv.nome} onChange = {props.handleChange} placeholder="Nome"/>
            <br/>
            <input type="text" name="sobrenome" value = {props.cv.sobrenome} onChange = {props.handleChange} placeholder="Sobrenome"/>
            <br/>
            <input type="text" name="titulo" value = {props.cv.titulo} onChange = {props.handleChange} placeholder="Título"/>
            <br/>
            <input type="file" name="foto" value = {props.cv.foto} onChange = {props.handleChange} placeholder="Foto"/>
            <br/>
            <input type="text" name="endereco" value = {props.cv.endereco} onChange = {props.handleChange} placeholder="Endereço"/>
            <br/>
            <input type="tel" name="telefone" value = {props.cv.telefone} onChange = {props.handleChange} placeholder="Telefone"/>
            <br/>
            <input type="email" name="email" value = {props.cv.email} onChange = {props.handleChange} placeholder="Email"/>
            <br/>
            <textarea name="detalhes" value = {props.cv.detalhes} onChange = {props.handleChange} placeholder="detalhes"></textarea>
        </>
        
    )
}