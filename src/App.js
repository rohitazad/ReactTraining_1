import RouterConfig from './Route';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <RouterConfig />
          </Col>
        </Row>
      </Container>
    </>  
  );
}

export default App;
