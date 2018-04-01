import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import contIn from './containers/ContIn';
import PresIn from './components/PresIn';

import contOut from './containers/ContOut';
import PresOut from './components/PresOut';

import { Button} from 'semantic-ui-react'


import { withRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';
import {getItems} from './actions/index';


class App extends Component {
    componentWillMount() {
        this.props.dispatch(getItems());
    }
    render() {
        return (
            <div>
              <NavBar/>
              <AppHeader />
              <Switch>
                <Route exact path='/contin' component={contIn(PresIn, this.props)} />
                <Route exact path='/contout' component={contOut(PresOut, this.props)} />
                <Redirect to='/contin' />
              </Switch>
            </div>
        );
    }
}

function NavBar() {
    return (
        <header className="app-header">
          <Button.Group>
            <Button positive as={Link} to='contin'>Add</Button>
            <Button.Or />
            <Button as={Link} to='contout'>List</Button>
          </Button.Group>
        </header>
    );
}

function AppHeader() {
    return <h1 className="app-title">Local Storage In/Out App</h1>;
}

function mapStateToProps(state) {
  return {
      itemsIn: state.itemsIn,
      itemsOut: state.itemsOut
  };
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
}

App.defaultProps = {
    itemsIn: {},
    dispatch: () => {}
}


export default withRouter(connect(mapStateToProps)(App));
