import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './routes';
import { firebase } from './firebase';

const App = (props) => {
  return(
    <BrowserRouter>
      <HomeRoutes {...props}/>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App user={user}/>)
})