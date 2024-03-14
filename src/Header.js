import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <ul>
        <li><Link to="/">GET Api</Link></li>
        <li><Link to="/post">POST Api</Link></li>
        <li><Link to="/put">PUT Api</Link></li>
        <li><Link to="/delete">DELETE Api</Link></li>
      </ul>
      </div>
  );
}

export default Header;