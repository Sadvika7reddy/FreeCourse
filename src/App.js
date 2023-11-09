import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './route/rootLayout';
import './App.css';
import Products from './component/home';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import SubjectDetails from './component/subjectDetails';
import Quiz from './component/quiz';

function App() {
  const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/',element:<Products/>},
            {path:'/:productId',element:<SubjectDetails/>},
            {path:'/quiz',element:<Quiz/>}
        ],
    },    
      ])
  return (
    
    <div>
            <RouterProvider router={router}/>
    </div>
    
  );
}

export default App