import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./features/navigation/routes";

function App() {
  return (
    <Layout>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Routes>
    </Layout>
  );
}

export default App;
