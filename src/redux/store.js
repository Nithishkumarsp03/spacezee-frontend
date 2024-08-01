import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import commonProgramReducer from "./features/common/commonProgramSlice";
import userCourseReducer from "./features/user/userCourseSlice";
import { baseApi } from "./api/baseApi";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config for auth
const persistConfigAuth = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);

// Persist config for commonProgram
const persistConfigCommonProgram = {
  key: "commonPrograms",
  storage,
};

const persistedCommonProgramReducer = persistReducer(
  persistConfigCommonProgram,
  commonProgramReducer
);

// Persist config for userCourse
const persistConfigUserCourse = {
  key: "userCourse",
  storage,
};

const persistedUserCourseReducer = persistReducer(
  persistConfigUserCourse,
  userCourseReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    commonPrograms: persistedCommonProgramReducer,
    userCourse: persistedUserCourseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
