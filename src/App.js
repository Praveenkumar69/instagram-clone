import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Switch,
  Route,
} from "react-router-dom";
import MainFile from "./component/MainFile"
// import Test from "./component/Test"
// import Footers from "./component/Footers"
import Navbar from "./component/Navbar"
import Stories from "./component/Stories"
import Create from './component/Create';
import Post from './component/Post';
import Sidebar from './component/Sidebar';
import Protected from './component/Protected';
import Test from './component/Test';

function App() {
  // const Cmp = props.cmp;

  return (
    <>
      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/">Login</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>
      </div>
        <Switch>
          <Route exact path="/" component={MainFile}/>
          <Route path="/stories" >
          <Protected  cmp={Stories}/>
          </Route>
        </Switch>
    </Router> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainFile} />
          <Route exact path="/dashboard" >
          <Protected cmp={Navbar} />
          <div className="container">
          <Protected cmp={Stories} />
          <Protected cmp={Create} />
          <Protected cmp={Post} />
          <Protected cmp={Sidebar} />
          {/* <Protected cmp={Test} /> */}
            </div> 
          </Route>
          {/* <Route exact path="/stories" ><Protected cmp={Stories} /></Route> */}
        </Switch>
      </BrowserRouter>


      {/* <MainFile/> */}
      {/* <Footers/> */}
      {/* <Test/> */}
      {/* <Navbar />
      <div className="container">
      <Stories />
      <Create/>
      <Post/>
      <Sidebar />
      </div> */}
    </>
  );
}

export default App;
