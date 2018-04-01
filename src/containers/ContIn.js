import React, { Component } from 'react';
import {storeNewItem} from '../actions/index';

export default function(InnerComponent, props) {
    class ContIn extends Component {
        onAdd(item) {
            props.dispatch(storeNewItem(item));
        }

        render() {
            return <InnerComponent {...props} onAdd={this.onAdd.bind(this)}/>;
        }
    };
    return ContIn;
}
