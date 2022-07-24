import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from 'components/App';
import './index.css';
import { Theme } from './components/Theme';
import spinner from './components/Spinner/Spinner';
import { store, persistor } from './redux/store';

const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <PersistGate loading={spinner} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
