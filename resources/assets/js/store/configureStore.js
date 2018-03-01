import { createStore } from 'redux';
import reducers from 'src/reducers';

export default function configureStore() {
    return createStore(reducers);
};
