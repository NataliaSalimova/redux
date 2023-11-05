import { createStore } from 'redux';
const reducer = (state = 0, action)=> {
    switch (action.type) {
        case 'INC':
            return ++state;

        case 'DEC':
            return --state;

        default: {
            return state;
        }
    }
};

const store = createStore(reducer);

document.
    getElementById('inc').
    addEventListener('click', ()=> {
        store.dispatch({type: 'INC'})
});

document.
    getElementById('inc').
    addEventListener('click', ()=> {
        store.dispatch({type: 'DEC'})
});

const update = ()=> {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
}

store.subscribe(update);