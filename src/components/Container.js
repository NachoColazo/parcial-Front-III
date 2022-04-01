import React, { Component } from 'react';
import data from './data.json';
import Historia from './Historia';
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            historia: data,
            anteriores: [],
            finalizado: false
        }
    }

    pasarHistoria = (incrementar) => {
        const id = incrementar.target.id;
        const aux = this.state.anteriores;
        let nro = 0;

        if (this.state.anteriores.length > 0) {
            if (this.state.anteriores[this.state.anteriores.length - 1] === "A") {
                nro += 1;
            }
        }
        aux.push(id);

        if (id === "A") {
            nro = nro + 1;
            this.setState({ anteriores: aux, contador: this.state.contador + nro })
        }

        else {
            nro = nro + 2;
            this.setState({ anteriores: aux, contador: this.state.contador + nro })
        }
    }

    finalizarHistoria = () => {
        this.setState({ finalizado: true })
    }

    render() {
        return (
            <div className="layout">
                {this.state.historia[this.state.contador] &&
                    <Historia historia={this.state.historia[this.state.contador].historia}
                        finalizar={this.finalizarHistoria} />}
                {this.state.historia[this.state.contador] &&
                    <Opciones opciones={this.state.historia[this.state.contador].opciones}
                        incremento={this.pasarHistoria} />}
                <Recordatorio recordatorio={this.state.anteriores} 
                        finalizado={this.state.finalizado}/>

            </div>
        );
    }
}

export default Container;

