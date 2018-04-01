import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function(InnerComponent, props) {
    class ContOut extends Component {
        render() {
            return <InnerComponent items={props.itemsOut.items}/>;
        }
    };

    return ContOut;
}
