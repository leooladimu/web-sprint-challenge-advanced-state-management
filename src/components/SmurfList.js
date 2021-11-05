import React from 'react';
import Smurf from './Smurf';
// import { fetchSmurfs } from './actions';
import { connect } from "react-redux";

 const SmurfList = props => {
    const { smurfs } = props;
    const isLoading = state => state.loading;

    if (isLoading) {
        return <h1>WAIT!!!</h1>;
    }

    return(<div className="listContainer">
        {
            smurfs.map(smurf => {
                return(<Smurf key={smurf.id} smurf={smurf}/>)
            })
        }
    </div>);
}
 
const mapStateToProps = state => {
    return {
        // ...state,
        smurfs: state.smurfs,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.