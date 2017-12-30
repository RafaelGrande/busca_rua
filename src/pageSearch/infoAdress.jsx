import React from 'react'

import BoxInfo from './boxInfo'
import BoxMap from './boxMap'

export default props => {
    if(props.showInfo){
        return (
            <section>
                <button className="clearInfo mdl-button mdl-js-button mdl-button--icon mdl-button--colored" onClick={props.clearInfo}>
                    <i className="material-icons">clear</i>
                </button>
                <BoxInfo 
                    infoCEP={props.infoCEP}
                    infoLogradouro={props.infoLogradouro}
                    infoBairro={props.infoBairro}
                    infoLocalidade={props.infoLocalidade}
                />
                <BoxMap 
                    CEPnumber={props.CEPnumber}
                />
            </section>
        )        
    } else {
        return null
    }
}