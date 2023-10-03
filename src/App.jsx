import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <h2>Nav</h2>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
