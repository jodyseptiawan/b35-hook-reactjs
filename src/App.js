//import useState & useEffect here
import {useState} from 'react'
import { 
    Container, 
    Row, Col, Card } from 'react-bootstrap'


import dataProduct from './dummyData/product'

function App() {
    const [datas] = useState(dataProduct)


    return (
        <Container>
            <Row>
                {datas.map((data,idx)=>(
                    <Col sm="3" key={idx}>
                        <Card className="shadow mt-3">
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <p>Price: <b>{data.price}</b></p>
                                <p>Qty: <b>{data.qty}</b></p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    )
}

export default App;