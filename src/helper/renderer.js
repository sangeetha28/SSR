import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

const renderString = () => {
  const content = renderToString(<Home />);
  // Inorder to hydrate the intial static html add the script tag in the html in order for the browser to request for client bundle
  return `
    <html>
    <head>
    </head>
    <body>
    <div id="root">${content}</div>
    </body>
    <script src="bundle.js"></script>
    </html>
    
    `;
};

export default renderString;
