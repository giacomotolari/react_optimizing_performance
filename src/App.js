import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import routes from "./features/navigation/routes";

function App() {
  return (
    <Layout>
      <main>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
