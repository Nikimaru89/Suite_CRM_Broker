import React, { useEffect, useState, Fragment } from 'react';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
import { authToken } from '../actions/auth';

const ProtectedRoute = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const reduxToken = useSelector(state => state.auth.currentUser.token)
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(user => {
      dispatch(authToken(user.signInUserSession.accessToken.jwtToken))
      setLoading(true)
    })
    .catch(err => {
      console.log(err);
      setLoading(true);
    })
  }, [])
  
  if (reduxToken && loading) {
    return <Fragment>{props.children}</Fragment>
  }
  if(!reduxToken && loading) {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoute