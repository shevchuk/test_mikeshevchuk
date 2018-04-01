import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StoreTable } from './StoreTable'
import { Pagination, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class PresOut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            filteredItems: this.filterItems(1)
        };
    }

    onPageChange(e, data) {
        this.setState({
            activePage: data.activePage,
            filteredItems: this.filterItems(data.activePage)
        });
    }

    filterItems(activePage) {
        const perPage = 10;
        const offset = perPage * (activePage - 1);
        
        return this.props.items.slice(offset, offset+perPage);
    }

    render() {
        if (this.props.items.length === 0) {
            return (
                <Message>
                  <Message.Header>
                    Oops
                  </Message.Header>
                  <p>
                    No items were found, please <Link to='/contin'>add some</Link>
                  </p>
                </Message>
            );
        } else {
            return (
                <div className='app-presout-container'>
                  <StoreTable items={this.state.filteredItems}/>
                  <Pagination
                    defaultActivePage={this.state.activePage}
                    totalPages={this.props.items.length / 10}
                    firstItem={null}
                    lastItem={null}
                    prevItem={null}
                    nextItem={null}
                    onPageChange={this.onPageChange.bind(this)}/>
                </div>
            );
        }
    }
}
PresOut.defaultProps = {
    items: []
}

PresOut.propTypes = {
    items: PropTypes.array.isRequired
}
