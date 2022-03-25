import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import Layout from "./components/layout/layout.component";
function App() {
  return (
    <div className="App">
      <Layout>
        <div className="min-h-screen">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
