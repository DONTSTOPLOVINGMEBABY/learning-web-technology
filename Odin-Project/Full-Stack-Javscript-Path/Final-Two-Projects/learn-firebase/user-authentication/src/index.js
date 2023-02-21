import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouteSwitch/>
  </React.StrictMode>
);