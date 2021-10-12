import { Layout, Row, Col, Typography } from "antd";

const { Title } = Typography;

const Navbar = () => {
  return (
    <Layout>
      <Row justify="center">
        {/* <Col span={24}> */}
        <Title>News Simulation</Title>
        {/* </Col> */}
      </Row>
    </Layout>
  );
};

export default Navbar;
