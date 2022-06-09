import { useReducer } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Declare counter variable here ...
let counter = 0;

function CounterWithVariable() {
  // Init useReducer for forceUpdate component here ...
  const [_, forceUpdate] = useReducer((x) => x + 1,0)

  // Create function for Handle Increment here ...
  const Add = () => {
    counter = counter + 1
    console.log('Varible: ',counter)
    forceUpdate()
  }

  // Create function for Handle decrement here ...
  const Less = () => {
    counter = counter - 1
    console.log('Varible: ',counter)
    forceUpdate()
  }

  return (
    <Container>
      <Row
        className="d-flex align-items-center justify-content-center"
        style={{ height: '40vh' }}
      >
        <Col md="6 text-center">
          <h4>Counter with Variable</h4>
          <h1>{counter}</h1>
          <Button onClick={Add} size="sm" className="me-3">
            Add
          </Button>
          <Button onClick={Less} size="sm">
            Less
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CounterWithVariable;
