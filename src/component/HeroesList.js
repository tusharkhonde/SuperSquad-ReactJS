import React, {Component} from 'react';
import { connect } from 'react-redux';
import {removeHeroById} from '../actions';

class HeroesList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    <h4>Heores</h4>
                    {
                        this.props.heroes.map(hero => {
                            return(
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item"><b>{hero.name}</b></div>
                                    <div className="list-item right-button"
                                        onClick={()=>this.props.removeHeroById(hero.id)}
                                    >x</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    console.log('state',state);
    return {
        heroes : state.heroes
    }
}

export default connect(mapStateToProps, {removeHeroById})(HeroesList);
