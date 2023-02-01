import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootReducer } from "./reducers";
import { watcherUserCreate } from "./actionCreators/userActionCreators";
import { all } from "redux-saga/effects";
import { watcherBooks } from "./actionCreators/booksActionCreators";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watcherUserCreate(), watcherBooks()]);
}

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
