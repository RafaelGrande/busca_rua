import React from 'react'


export default props => (
    <section  className="boxInfo">
        <div>
            <span>
                <b>CEP: </b> {props.infoCEP}
            </span>
        </div>
        <div>
            <span>
                <b>Logradouro: </b> {props.infoLogradouro}
            </span>
        </div>
        <div>
            <span>
                <b>Bairro: </b> {props.infoBairro}
            </span>
        </div>
        <div>
            <span>
                <b>Localidade: </b> {props.infoLocalidade}
            </span>
        </div>
    </section>
)