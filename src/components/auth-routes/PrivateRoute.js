import React from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({
    user,
    component:Comp,
    ...rest
}) => {
  return (
    <Route {...rest} component = {(props)=> (
        user ? 
        <Comp {...props} user={user}/>
        :
        <Redirect to="/sign-in" />
    )}/>
  )
}

export default PrivateRoute