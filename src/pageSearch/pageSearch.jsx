import React, { Component } from 'react'
import axios from 'axios'

import SearchField from './searchField'
import InfoAdress from './infoAdress'

export default class PageSearch extends Component {
    constructor(props){
        super(props)
        this.state = { CEPnumber: '' , showInfo: false}

        this.handleChange = this.handleChange.bind(this)
        this.getAdress = this.getAdress.bind(this)

        console.log(this.state)
    }

    handleChange(e){
        this.setState({...this.state, CEPnumber: e.target.value })
    }

    getAdress() {
        console.log(this.state.CEPnumber);
        axios.get(`https://viacep.com.br/ws/${this.state.CEPnumber.replace('-','')}/json/?callback=myfn`)
            .then(resp => {
                let adress = resp.data
                adress = JSON.parse(adress.replace('myfn(','').replace(');',''))
                this.setState({...this.state, infoCEP: adress.cep })
                this.setState({...this.state, infoLogradouro: adress.logradouro })
                this.setState({...this.state, infoBairro: adress.bairro })
                this.setState({...this.state, infoLocalidade: adress.localidade })
                
                this.setState({...this.state, showInfo: true })
                console.log(this.state)
            
            })
    }



    render(){ 
        
        return (
            <section>
                <SearchField 
                    getAdress={this.getAdress} 
                    CEPnumber={this.state.CEPnumber}
                    handleChange={this.handleChange} 
                    onchange={this.handleChange}
                />
                <InfoAdress 
                    infoCEP={this.state.infoCEP}
                    infoLogradouro={this.state.infoLogradouro}
                    infoBairro={this.state.infoBairro}
                    infoLocalidade={this.state.infoLocalidade}
                    CEPnumber={this.state.CEPnumber}
                    showInfo={this.state.showInfo}
                />
                
                
            </section>
        )
        
    }
}