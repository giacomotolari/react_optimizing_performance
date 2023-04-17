import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div id="Layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
