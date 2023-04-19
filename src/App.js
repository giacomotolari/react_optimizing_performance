import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./App.scss";
import routes from "./features/navigation/routes";
import Layout from "./Layout/Layout";

function App() {
  
  const override = {
    margin: "10% auto",
    borderColor: "red",
  };

  return (
    <Layout>
      <Suspense
        fallback={
          <MoonLoader
            color="red"
            cssOverride={override}
            size={130}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <main>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.path} {...route} />;
            })}
          </Routes>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
