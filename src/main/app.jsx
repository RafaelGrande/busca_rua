import '../../node_modules/material-design-lite/material.min.css'
import '../../node_modules/material-design-lite/material.min.js'

import React from 'react'

import PageSearch from '../pageSearch/pageSearch'
export default props => (
    <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--scroll">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Busca rua</span>
            </div>
        </header>
        <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-cell--12-col-phone" >
                        <PageSearch />
                    </div>
                </div>
            </div>
        </main>
    </div>
)