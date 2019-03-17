import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
export default req => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  // Inorder to hydrate the intial static html add the script tag in the html in order for the browser to request for client bundle
  return `
    <html>
    <head>
    <title>Initial text</title>

    </head>
    <body>
     <div id="root"> ${content} </div>
    </body>
    <script src="bundle.js"></script>
    </html>

    
    `;
};
