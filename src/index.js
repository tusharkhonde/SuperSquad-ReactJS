import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store.getState());

//store.subscribe(() => console.log('store',store.getState()));
//store.dispatch(addCharacterById(3));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>        
    , document.getElementById('root')
);

