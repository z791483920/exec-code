import React from 'react';
import {Provider, connect} from 'react-redux';
import Counter from './counter';
// import reactLogo from '../assets/react-logo.png'


export default class Root extends React.Component {


    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div></div>;

        if (this.state.store && this.state.globalEventDistributor) {
            ret =
                <Provider store={this.state.store}>
                    <div style={{marginTop: 100}}>
                        <h3>LOGO</h3> <br />
                        This was rendered by App3, which is written in React.
                        <Counter globalEventDistributor={this.state.globalEventDistributor}/>
                    </div>
                </Provider>
        }

        return ret;
    }
}
