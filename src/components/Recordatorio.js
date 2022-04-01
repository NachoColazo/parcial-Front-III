import React, { Component } from 'react'

export default class Recordatorio extends Component {
    render() {
        return (
            <div className="recordatorio">
                {!this.props.finalizado && <h3>Selección anterior: {this.props.recordatorio[this.props.recordatorio.length - 1]}</h3>}
                {this.props.finalizado ? <h2>Este ha sido el historial de opciones elegidas: </h2> :
                    <h4>Historial de opciones elegidas: </h4>}
                <ul>{this.props.recordatorio.map((recordar, key) => <li key={key}>{recordar}</li>)}</ul>
            </div>
        )
    }
}
