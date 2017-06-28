import React, {Component} from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component{
    strength(){
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }

    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }

    speed(){
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }

    render(){
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Overall Strength -  {this.strength()} </b>
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence -  {this.intelligence()} </b>
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed -  {this.speed()} </b>
                    </li>
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps,null)(SquadStats);