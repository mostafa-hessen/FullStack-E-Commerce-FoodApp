import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './Store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './contexts/AuthContext';
import {createStore} from "redux" 
// import reducer from './Component/Redux/reducer';
import reducers from './Component/Redux/compainedReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers)
root.render(
  <React.StrictMode>
     <AuthContextProvider>
     <Provider store={store}>
     <App />
     </Provider>
     </AuthContextProvider> 
  </React.StrictMode>
);

reportWebVitals();