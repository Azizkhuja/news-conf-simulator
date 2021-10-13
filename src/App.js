import "antd/dist/antd.css";
import "./App.css";
import { Row, Col } from "antd";

import Navbar from "./components/Navbar/Navbar";
import Questions from "./components/Question/Questions";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Row justify="center">
          <Navbar />
        </Row>
        <Row justify="center">
          <Questions />
        </Row>
      </div>
    </div>
  );
}

export default App;
