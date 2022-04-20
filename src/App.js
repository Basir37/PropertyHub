import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Rent from "./components/Pages/Rent/Rent";
import Buy from "./components/Pages/Buy/Buy";
import Search from "./components/Pages/Search/Search";
import Property from "./components/Pages/Property/Property";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  404 NOT FOUND
                </h1>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="buy" element={<Buy />} />
          <Route path="search" element={<Search />} />
          <Route path="property">
            <Route path=":propertyId" element={<Property />} />
          </Route>
          <Route
            path="/about"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  ABOUT
                </h1>
                <br />
                <span style={{ marginTop: "3rem", color: "rgb(37, 89, 102)" }}>
                  WELCOME TO PROPERTYHUB{" "}
                </span>
                <p style={{ color: "rgb(26, 55, 58)" }}>
                  We see change as opportunity, not a threat and start with the
                  belief that there is a better way. Over the past 25 years
                  we’ve created more than 5,000 new homes and 1.5 million sq ft
                  of workspace in over 60 regeneration projects. Have a look at
                  the short film below to learn more about how we’ve achieved
                  this and what drives us.
                </p>
              </main>
            }
          />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
