import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    
    state ={
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    
    // set state that depends on previous state, use previous state
    sideDrawerToggleHandler = () => {
        this.setState ((prevState) => {return { showSideDrawer: !prevState.showSideDrawer}; 
        });
    }
    
    render() {
        return (
            <Fragment>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout); 

