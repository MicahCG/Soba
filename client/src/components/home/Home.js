import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

import { deleteAccount, getCurrentProfile } from '../../actions/profile';

const Home = ({ 
    getCurrentProfile,
    deleteAccount, 
    auth: { user }, 
    profile: { profile, loading } 
    }) => {
    
    useEffect(() => {
        getCurrentProfile()
    }, []);

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <h1 className = 'large text-primary'>Home</h1>
        <p className = 'lead'>
        <i className = 'fas fa-user'></i> Welcome { user && user.name }
        </p>

        
    </Fragment>;
    
};


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(
    mapStateToProps, { getCurrentProfile, deleteAccount })(Home);
