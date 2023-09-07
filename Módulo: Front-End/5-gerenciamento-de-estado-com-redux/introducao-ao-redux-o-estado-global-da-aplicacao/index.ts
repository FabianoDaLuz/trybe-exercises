import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux';

const reducer = (state =  { count: 0}, action) => state;


const store = createStore(reducer);

//action e dispatch

const increment = { 
    type: 'INCREMENT',
};

store.dispacth(increment);

store.sbscribe(() => {
    store.getState();
    console.log(store.getState());

    // {
        // count: 0
        // }
    }
});

