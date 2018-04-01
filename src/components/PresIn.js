import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Form, Button, Dropdown, Input, Message } from 'semantic-ui-react'
import { ValueInput } from './ValueInput'
import { ValueSelect } from './ValueSelect'

export default class PresIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                value: null,
                selection: null
            }
        };
    }

    
    onStoreValueChange(value) {
        this.setState({
            item: {
                ...this.state.item,
                ...{
                    value: value
                }
            }
        });
    }

    onStoreSelectionChange(value) {
        this.setState({
            item: {
                ...this.state.item,
                ...{
                    selection: value
                }
            }
        });
    }

    onAdd() {
        this.props.onAdd(this.state.item);
    }

    getSuccessMessage() {
        return (
            <Message success attached>
              New item was added!
            </Message>
        );
    }
    
    getEmptyValueMessage() {
        return (
            <Message error attached>
              Sorry, cannot save empty objects.
            </Message>
        );
    }
    
    render() {
        return (
            <div className="app-presin-container">
              {this.props.itemsIn.showSuccessMessage ? this.getSuccessMessage() : null}
              {this.props.itemsIn.showEmptyValueMessage ? this.getEmptyValueMessage() : null}

              <Form className="attached fluid segment" size="big">
                <Form.Field>
                  <label>New Value</label>
                  <ValueInput onChange={this.onStoreValueChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                  <label>New Selection</label>
                  <ValueSelect onChange={this.onStoreSelectionChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                  <Button type="button" onClick={this.onAdd.bind(this)} color="green">Add</Button>
                </Form.Field>

              </Form>
            </div>
        );
    }
}

PresIn.propTypes = {
    value: PropTypes.string,
    onAdd: PropTypes.func.isRequired
}
