import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import  serialize from "serialize-javascript";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // Inorder to hydrate the intial static html add the script tag in the html in order for the browser to request for client bundle
  return `
    <html>
    <head>
    <title>Initial text</title>
    </head>
    <body>
     <div id="root">${content}</div>
    </body>
    <script>
    window.INITIAL_DATA = ${JSON.stringify(store.getState())}
    </script>
    <script src="bundle.js"></script>
    </html>

    
    `;
};
