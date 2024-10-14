import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import myReducer from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store); // Create persistor instance

export { store, persistor }; // Export both store and persistor
