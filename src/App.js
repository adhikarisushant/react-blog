import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  return (
    <div className="App">
      <>
      <Topbar />
      <Write />
      </>
    </div>
  );
}

export default App;
