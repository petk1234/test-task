import { HashLink } from "react-router-hash-link";
function Header() {
  return (
    <header>
      <h1>TESTTASK</h1>
      <nav>
        <HashLink smooth to="#users">
          <button>Users</button>
        </HashLink>
        <HashLink smooth to="#form">
          <button>Sign up</button>
        </HashLink>
      </nav>
    </header>
  );
}
export default Header;
