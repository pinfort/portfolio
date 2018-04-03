import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'src/reducers';
import thunk from 'redux-thunk';
import errorsMiddleware from 'src/middleware/error';

export default function configureStore() {
    const composeEnhancers = process.env.APP_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, composeEnhancers(applyMiddleware(
        thunk,
        errorsMiddleware(),
    )));
};
