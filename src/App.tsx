import * as React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard/:username/:fullName" element={<Dashboard />} />
          <Route path="food/:name" element={<Food authenticated={true} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
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
  const { name } = useParams();
  return (
    <div>
      I love to eat {name} and my login status: {props.authenticated.toString()}
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
  const {username, fullName} = useParams();
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
