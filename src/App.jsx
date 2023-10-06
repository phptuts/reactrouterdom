import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  function activeNav({ isActive, isPending }) {
    console.log(isActive, isPending, "activeNav");

    if (isActive) {
      return "active-nav";
    }
  }

  return (
    <>
      <nav>
        <h2>Nav</h2>
        <ul>
          <li>
            <a href="/about">About Standard</a>
          </li>
          <li>
            <Link to="/about">About Link</Link>
          </li>
          <li>
            <NavLink className={activeNav} to="/about">
              About NavLink
            </NavLink>
          </li>
          <li>
            <NavLink to="/person/hound">Person Hound</NavLink>
          </li>
          <li>
            <NavLink end={true} to="/person">
              Person Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
