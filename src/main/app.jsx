import '../../node_modules/material-design-lite/material.min.css'
import '../../node_modules/material-design-lite/material.min.js'

import React from 'react'

import Search_field from '../search_field/search_field'
import Box_info from '../box_info/box_info'
import Box_map from '../box_map/box_map'

export default props => (
    <section>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="input_CEP" />   
            <label className="mdl-textfield__label" htmlFor="input_CEP">Digite um CEP</label>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--primary">
            Buscar
        </button>
        <Search_field />
        <Box_info />
        <Box_map />
    </section>
)