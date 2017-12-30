import React from 'react'


export default props => (
    <section className={props.classFieldValid}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="input_CEP" value={props.CEPnumber}  onChange={props.handleChange}/>   
            <label className="mdl-textfield__label" htmlFor="input_CEP" >Digite um CEP</label>
            <span className="mdl-textfield__error">{props.msgError}</span>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--primary" onClick={props.getAdress}>
            Buscar
        </button>
    </section>
)