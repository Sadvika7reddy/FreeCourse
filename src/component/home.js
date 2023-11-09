import React,{Fragment} from 'react';
import { Card, Container,Row,Col,Figure, Button } from 'react-bootstrap';
import classes from './home.module.css'

import { Link } from 'react-router-dom';
let productsArr=[
    {

        title:'Mathematics',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7o4SCaQI2-ai4hEKD-CEBHXlCZGsKAGXXA&usqp=CAU',
        id:"s1"
        },
        
        {
        
        title: 'Physics',
        imageUrl: 'https://www.shutterstock.com/image-vector/physics-chalkboard-background-hand-drawn-600w-1988419205.jpg',
        id:"s2"
        },
        {
        title: 'Biology',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFCVonM5SNqBxT04cnWbGDLd6EtS0zy4jrA&usqp=CAU',
         id:"s3"
        },
        {
        title: 'Chemistry',
        imageUrl: 'https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg',
        id:"s4"
        }
]
const Products=(props)=>{
    
    
    let List=productsArr.map(item=><ul className={classes.align}><li className={classes.li} key={item.id} >
        <Container>
                <Row>
                    <Col xs={7}>
                        <Card>
                            <Card.Body><h2>
                                <h3><Link to={`/${item.id}`}>{item.title}</Link></h3>
                            </h2>
    <Figure>
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src={item.imageUrl} 
      />
      </Figure>
      </Card.Body>
      
                        </Card>
                    </Col>
                </Row>
            </Container>
    </li></ul>)
        return(
       <Fragment>
            <Button className={classes.buttons}>
                <Link className={classes.link} to='/quiz'>Quiz</Link>
            </Button>
            <h1 style={{textAlign:"center"}}>Courses</h1>   
           <div>{List}</div>
        </Fragment>
    ) 
}
export default Products;