import React from 'react'
import { BrowserRouter, withRouter}  from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import User from './user/user'
import Film from './film/film'
import Planet from './planet/planet'

const Root = ({ route }) => {  
    return (
        <BrowserRouter>    
            {renderRoutes(route.routes)}        
        </BrowserRouter>    
    );
};

export const routes = [
    {
      component: withRouter(Root),
      routes: [        
        {
            path: "/films",
            exact: true,
            component: Film
        },
        {
            path: "/planets",
            exact: true,
            component: Planet
        },
        {
            path: "/",
            exact: true,
            component: User
          }
      ]
    }
  ];

 
  