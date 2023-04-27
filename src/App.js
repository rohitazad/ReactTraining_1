import RouterConfig from './Route';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContextFunction from './ContextAPI/context';
function App() {
  return (
    <>
      <ContextFunction>
        <Container>
            <Row>
              <Col>
                <RouterConfig />
              </Col>
            </Row>
          </Container>
      </ContextFunction>
    </>  
  );
}

export default App;
