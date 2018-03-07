import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'src/reducers';
import thunk from 'redux-thunk';
import errorsMiddleware from 'src/middleware/error';

export default function configureStore() {
    return createStore(reducers, compose(applyMiddleware(
        thunk,
        errorsMiddleware(),
    )));
};
