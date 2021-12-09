import React, { Component } from 'react';
import RoundButton from './RoundButton';

class Wheel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radius: 150,
            cards: []
        }
        this.temp_theta =0.0;
    }

    componentDidMount(){
        let center_wheel = {
            x: parseFloat(this.wheel.style.width) / 2.0,
            y: parseFloat(this.wheel.style.height) / 2.0}

        setInterval(() => {
            this.temp_theta += 0.2;
            this.wheel.style.transform = `translate(-50%,-50%) rotate(${this.temp_theta * 0.5}deg)`;
            }, 10);
        
        let new_cards = [
            <RoundButton key={0} theta={(Math.PI /4.0)*0} radius={this.state.radius} center={center_wheel} dialog_img = 'curioso.jpg' sphere_img = 'sphere_blue.png' titulo='Curioso'></RoundButton>,
            <RoundButton key={1} theta={(Math.PI /4.0)*1} radius={this.state.radius} center={center_wheel} dialog_img = 'sincero.png' sphere_img = 'sphere_mint.png' titulo='Sincero'></RoundButton>,
            <RoundButton key={2} theta={(Math.PI /4.0)*2} radius={this.state.radius} center={center_wheel} dialog_img = 'feliz.jpg' sphere_img = 'sphere_white.png' titulo='Feliz'></RoundButton>,
            <RoundButton key={3} theta={(Math.PI /4.0)*3} radius={this.state.radius} center={center_wheel} dialog_img = 'inteligente.jpg' sphere_img = 'sphere_yellow.png' titulo='Inteligente'></RoundButton>,
            <RoundButton key={4} theta={(Math.PI /4.0)*4} radius={this.state.radius} center={center_wheel} dialog_img = 'correcto.jpg' sphere_img = 'sphere_red.png' titulo='Correcto'></RoundButton>,
            <RoundButton key={5} theta={(Math.PI /4.0)*5} radius={this.state.radius} center={center_wheel} dialog_img = 'familiar.jpg' sphere_img = 'sphere_sand.png' titulo='Familiar'></RoundButton>,
            <RoundButton key={6} theta={(Math.PI /4.0)*6} radius={this.state.radius} center={center_wheel} dialog_img = 'aventurero.jpg' sphere_img = 'sphere_indigo.png'titulo='Aventurero'></RoundButton>,
            <RoundButton key={7} theta={(Math.PI /4.0)*7} radius={this.state.radius} center={center_wheel} dialog_img = 'mejora.jpg' sphere_img = 'sphere_pink.png' titulo='Cambiante'></RoundButton>,
        ]
        this.setState({cards: new_cards})
    }

    handle_scroll = event => {
        this.temp_theta += event.deltaY;
        this.wheel.style.transform = `translate(-50%,-50%) rotate(${this.temp_theta * 0.5}deg)`;
    }


    render() {
        return (
            <div onWheel={this.handle_scroll} style={styles.wheel} ref = {ref_id => this.wheel = ref_id}>
                {this.state.cards}
            </div>
        )
    }
}

const styles = {
    wheel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        height: '300px',
        width: '300px',
        backgroundColor: 'transparent'
    }
    
}

export default Wheel;