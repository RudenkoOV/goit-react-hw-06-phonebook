import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store } from "./redux/store";
import { Provider } from "react-redux";

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    accent: 'tomato',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
  </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
