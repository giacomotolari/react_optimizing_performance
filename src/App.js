import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./App.scss";
import routes from "./features/navigation/routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Suspense fallback={<MoonLoader color="green" />}>
        <main>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Routes>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
