import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import { setPerguntas, setPerguntasA, setRespostasA1, setRespostasA2 } from './constants/index.js';
import Respostas from './components/results/index.jsx';
import Perguntas from './components/perguntas/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Perguntas lista={setPerguntas} />,
      },
      {
        path: "perguntasA",
        element: <Perguntas lista={setPerguntasA} />,
        children: [
          { 
            path: "respostasA1",
            element: <Respostas lista={setRespostasA1} />
          },
          { 
            path: "respostasA2",
            element: <Respostas lista={setRespostasA2} />
          },
        ]
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
