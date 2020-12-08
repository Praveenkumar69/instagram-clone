import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MainFile from "./component/MainFile"
// import Test from "./component/Test"
// import Footers from "./component/Footers"
import Navber from "./component/Navbar"
import Stories from "./component/Stories"
import Create from './component/Create';

function App() {
  return (
    <>
        {/* <MainFile/> */}
        {/* <Footers/> */}
        {/* <Test/> */}
      <Navber />
      <div className="container">
      <Stories />
      <Create/>
      </div>
    </>
  );
}

export default App;
