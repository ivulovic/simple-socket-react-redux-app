import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/reducers";
import effects from "./store/effects";
import setupSocket from "./sockets/setupSocket";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch);
sagaMiddleware.run(effects, {socket});

export default store;