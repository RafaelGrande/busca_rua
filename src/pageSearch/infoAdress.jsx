import React from 'react'

import BoxInfo from './boxInfo'
import BoxMap from './boxMap'

export default props => {
    if(props.showInfo){
        return (
            <section>
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