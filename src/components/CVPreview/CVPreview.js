import React from 'react';

export default function CVPreview(props) {

    const styles = {
        CV_Container: 
        {
            width: '600px',
            height: '846px',
            marginInline: 'auto',
            backgroundColor: '#f2f2f2',
            padding: '30px'
        }
    }

    return (
        <div style={styles.CV_Container}>
            <div>
                <h1>{props.cv.personal.nome} {props.cv.personal.sobrenome}</h1>
                {props.cv.personal.endereco || props.cv.personal.telefone || props.cv.personal.email ? <p>{props.cv.personal.endereco} | {props.cv.personal.telefone} | {props.cv.personal.email}</p> : <p></p>}
            </div>
            <div>
                <h2>objetivo</h2>
                <p>{props.cv.personal.objetivo}</p>
            </div>
            <br/>
            <hr/>
            <div>
                {props.cv.experience.map((item) => {
                    return (
                        <div>
                            <h2>{item.cargo}</h2>
                            <p>{item.empresa}</p>
                            <span>{item.inicio}</span> - <span>{item.fim}</span>
                            <p>{item.detalhes}</p>
                        </div>
                    )
                })}
            </div>
            <br/>
            <hr/>
            <div>
                {props.cv.education.map((item) => {
                    return (
                        <div>
                            <h2>{item.curso}</h2>
                            <p>{item.universidade}</p>
                            <span>{item.inicio}</span> - <span>{item.fim}</span>
                            <p>{item.detalhes}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    ) 
}