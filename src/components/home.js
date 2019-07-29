import React,{Component} from 'react';


import '../App.css';
import {Navbar, Nav, Tabs, Tab, Table, Form, Button} from 'react-bootstrap';
import Calcs from './calcs';

export class Home extends Component  {
    render(){
        return (
    <div className="home">
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cost Calculator KE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Timer</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
      <div className="container Justify-content-center">
        <div className="jumbotron">
          <h2>Welcome to the online Cost Calculator KE</h2>
          <p>Updated last July 26 2019</p>
          <Form inline className="justify-content-center">
          <Form.Group controlId="calculate">
            
            <Form.Control type="text" onChange={this.myChangeHandler} placeholder="Enter ammount " />
          </Form.Group>
          <Form.Group controlId="calculate">
           <Button variant="dark"> Calculate </Button>
          </Form.Group>
        </Form>

        <Tabs className="justify-content-center" transition={false} defaultActiveKey="mpesa" id="starttabs">
          <Tab eventKey="mpesa" title="M-pesa">

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Type of Transaction</th>
                <th>Cost in KES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sending to Mpesa Users</td>
                <td>{val}</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Sending to Other Mobile Money Users</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Transfer to Unregistered Users </td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mpesa Agent Withdrawal </td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>5</td>
                <td>ATM Withdrawal </td>
                <td>Mark</td>
              </tr>
              
            </tbody>
          </Table>
            
          </Tab>
          <Tab eventKey="kplc" title="Kplc">
            <p>meeee</p>
            
          </Tab>
          
      </Tabs>
        </div>
      </div>

      <div className="jumbotron bg-dark jumbotron-fluid" id="footer">
        <p id="dis">Disclaimer !! : We are not liable for any losses
         that may arise for the use of this service</p>
      
      <p id="copyr">All rights reserved | Cost Calculator KE 2019</p>
      </div>
      

    </div>
  );
}
}
export default Home;
