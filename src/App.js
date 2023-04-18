import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./App.scss";
import routes from "./features/navigation/routes";
import Layout from "./Layout/Layout";
// import Text from "./components/Text";

const Text = lazy(() => import("./components/Text"));

function App() {
  const override = {
    margin: "10% auto",
    borderColor: "red",
  };

  const showText = true;

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
          {showText && <Text />}
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
