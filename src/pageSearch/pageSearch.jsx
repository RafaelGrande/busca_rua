
import './pageSearch.css'

import React, { Component } from 'react'
import axios from 'axios'

import SearchField from './searchField'
import InfoAdress from './infoAdress'

export default class PageSearch extends Component {
    constructor(props){
        super(props)
        this.state = { CEPnumber: '' , showInfo: false, msgError: 'teste', classFieldValid: 'test'}

        this.handleChange = this.handleChange.bind(this)
        this.getAdress = this.getAdress.bind(this)
        this.fieldValidation = this.fieldValidation.bind(this)
        this.clearInfo = this.clearInfo.bind(this)

        console.log(this.state)
    }

    handleChange(e){

        this.setState({...this.state, CEPnumber: e.target.value, classFieldValid: '', showInfo: false })
    }

    clearInfo(){
        this.setState({...this.state, CEPnumber: '', showInfo: false })
    }

    fieldValidation(t){
        let valid = true;
        let msgError = ''
        
        if(t.length != 8){
            valid = false
            msgError = "Digite 8 digitos"
        }
         if(!/^\d+$/.test(t.replace('-',''))){
            valid = false
            msgError = "Digite somente números"
        }
        if(t == ''){
            valid = false
            msgError = "Campo vazio"
        }

        return {
            IsValid : valid,
            msgError : msgError
        }
    } 

    getAdress() {
        let CEPvalidation = this.fieldValidation(this.state.CEPnumber.replace('-',''))
        if(CEPvalidation.IsValid){
            axios.get(`https://viacep.com.br/ws/${this.state.CEPnumber.replace('-','')}/json/?callback=myfn`)
            .then(resp => {

                let adress = resp.data
                adress = JSON.parse(adress.replace('myfn(','').replace(');',''))
                if(!adress.erro){
            
                    this.setState({...this.state, infoCEP: adress.cep })
                    this.setState({...this.state, infoLogradouro: adress.logradouro })
                    this.setState({...this.state, infoBairro: adress.bairro })
                    this.setState({...this.state, infoLocalidade: adress.localidade })
                    
                    this.setState({...this.state, showInfo: true })
                    console.log(this.state)
                }else{
                    this.setState({...this.state, msgError: "Endereço não encontrado", classFieldValid: "is-invalid" });
                }
            })
        } else { 
           this.setState({...this.state, msgError: CEPvalidation.msgError, classFieldValid: "is-invalid" });
           
           //this.setState({...this.state, classFieldValid: "is-invalid" });
        }
        
    }



    render(){ 
        
        return (
            <section>
                <SearchField 
                    getAdress={this.getAdress} 
                    CEPnumber={this.state.CEPnumber}
                    classFieldValid={this.state.classFieldValid}
                    msgError={this.state.msgError}
                    handleChange={this.handleChange} 
                    fieldIsValid={this.fieldValidation}
                    onchange={this.handleChange}
                    
                />
                <InfoAdress 
                    infoCEP={this.state.infoCEP}
                    infoLogradouro={this.state.infoLogradouro}
                    infoBairro={this.state.infoBairro}
                    infoLocalidade={this.state.infoLocalidade}
                    CEPnumber={this.state.CEPnumber}
                    showInfo={this.state.showInfo}
                    clearInfo={this.clearInfo}
                />
                
                
            </section>
        )
        
    }
}