import "antd/dist/antd.css";
import "./App.css";
import { Layout, Row } from "antd";

import Navbar from "./components/Navbar/Navbar";
// import Question from "./components/Question/Question";

function App() {
  return (
    <Layout>
      <Row justify="center">
        <Navbar />
        {/* <Question /> */}
      </Row>
    </Layout>
  );
}

export default App;
