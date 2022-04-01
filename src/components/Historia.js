import React, { Component } from 'react'

export default class Historia extends Component {

    componentWillUnmount(){
        alert("El parcial ha finalizado")
        this.props.finalizar()
    }
    
    render() {
        return (
            <div className="historia">
                <h1>{this.props.historia}</h1>

            </div>
        )
    }
}
