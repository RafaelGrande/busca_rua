import React from 'react'


export default props => (
    <section>
        <iframe width="100%" height="300" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCRZrs8qc95N7Wm3bpZJkSpDYmy_zbMmwo&q=${props.CEPnumber}`} allowFullScreen></iframe>
    </section>
)