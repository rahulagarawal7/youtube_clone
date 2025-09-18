import { RouterProvider } from "react-router-dom";
import router from "../src/navigation/routes/router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import GlobalAlertPopup from "./components/GlobalAlertPopup";
import { injectStore } from "./services/NetworkInterceptor";

const App = () => {
  injectStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <GlobalAlertPopup />
      </PersistGate>
    </Provider>
  );
};

export default App;
