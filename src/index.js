import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import AppRoute from "./routes/app-route";
import reportWebVitals from "./reportWebVitals";
import "./styles/style.scss";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <AppRoute />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
