import * as React from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard/:username/:fullName" element={<Dashboard />} />
          <Route path="food" element={<Food authenticated={true} />} />
          <Route path="food/:search" element={<FoodSearch />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
function FoodSearch(props: any) {
  const { search } = useParams();
  return <div>I searched for {search} </div>;
}
function Search(props: any) {
  const [keyword, setKeyword] = React.useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/food/${keyword}`);
  };
  return (
    <>
      <h2>Type your fav food: </h2>
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      {/* <Link to={`food/${keyword}`}>Take me !</Link> */}
      <button onClick={handleClick}>Take me !</button>
      <Outlet />
    </>
  );
}
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard/mb97ghy/Madhurya">Dashboard</Link>
          </li>
          <li>
            <Link to="/food/banana">Get food item</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Food(props: any) {
  // const { name } = useParams();
  return (
    <div>
      {/* I love to eat {name} */}
      <div>Login status: {props.authenticated.toString()}</div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const { username, fullName } = useParams();
  return (
    <div>
      <h2>Dashboard</h2>
      <div>Username: {username}</div>
      <div>Full Name: {fullName}</div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
