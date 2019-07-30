import React from 'react';
import './App.css';
import {Navbar, Nav, Tabs, Tab, Table, Form, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    
    this.setState({username: event.target.value});
  }


  render() {
    let val = '';
    let val2 = '';
    let val3 = '';
    let val4 = '';
    let val5 = '';

    if (this.state.username <= 0) {
      val = '';
      val2 = '';
      val3 = '';
      val4 = '';
      val5 = '';
    } 
    else if (this.state.username <= 100) {
      val = "FREE";
      val2 = 'N/A';
      val3 = 'N/A';
      val4 = 'N/A';
      val5 = '10';
    } 
    else if (this.state.username <= 199) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = 'N/A';
      val5 = 27; 
    } 
    else if (this.state.username <= 500) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = 34;
      val5 = 27;
    } 
    else if (this.state.username <= 1000) {
      val = 15;
      val2 = 15;
      val3 = 49;
      val4 = 34;
      val5 = 28;
    } 
    else if (this.state.username <= 1500) {
      val = 26;
      val2 = 26;
      val3 = 59;
      val4 = 34;
      val5 = 28;
    } 
    else if (this.state.username <= 2500) {
      val = 41;
      val2 = 41;
      val3 = 74;
      val4 = 34;
      val5 =28;
    } 
    else if (this.state.username <= 3500) {
      val = 56;
      val2 = 56;
      val3 = 112;
      val4 =67;
      val5 =50;
    } 
    else if (this.state.username <= 5000) {
      val = 61;
      val2 = 61;
      val3 = 135;
      val4 = 67;
      val5 = 67;
    } 
    else if (this.state.username <= 7500) {
      val = 77;
      val2 = 77;
      val3 = 166;
      val4 = 112;
      val5 = 84;
    } 
    else if (this.state.username <= 10000) {
      val = 87;
      val2 = 87;
      val3 = 205;
      val4 = 112;
      val5 = 112;
    } 
    else if (this.state.username <= 15000) {
      val = 97;
      val2 = 97;
      val3 = 265;
      val4 =197;
      val5 = 162;
    } 
    else if (this.state.username <= 20000) {
      val = 102;
      val2 = 102;
      val3 = 288;
      val4 = 197;
      val5 = 180;
    }
    else if (this.state.username <= 35000) {
      val = 105;
      val2 =105;
      val3 = 309;
      val4 = 'N/A';
      val5 = 191;
    } 
    else if (this.state.username <= 50000) {
      val = 105;
      val2 =105;
      val3 = 'N/A';
      val4 = 'N/A';
      val5 = 191;
    }
    else if (this.state.username <= 70000) {
      val = 105;
      val2 =105; 
      val3 = 'N/A';
      val4 = 'N/A';
      val5 =300;
    } 
    else if (this.state.username > 70000) {
      val = "ammount exceeds maximum transaction allowed";
      val2 = "ammount exceeds maximum transaction allowed";
      val3 = "ammount exceeds maximum transaction allowed";
      val4 = "ammount exceeds maximum transaction allowed";
      val5 = "ammount exceeds maximum transaction allowed";
    } 
    
    else {
      val = 'please enter numbers';
      val2 = 'please enter numbers';
      val3 = 'please enter numbers';
      val4 = 'please enter numbers';
    }
    return (
    
    <div className="App">
  
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
          <h2>Welcome to the online Mpesa Cost Calculator KE</h2>
          <p>Updated last July 26 2019</p>
          <Form inline className="justify-content-center">
          <Form.Group controlId="calculate">
            
            <Form.Control type="text" onChange={this.myChangeHandler} placeholder="Enter ammount " />
          </Form.Group>
          <Form.Group controlId="calculate">
           <Button variant="dark" href=""> Calculate </Button>
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
                <td>{val2}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Transfer to Unregistered Users </td>
                <td>{val3}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mpesa Agent Withdrawal </td>
                <td>{val5}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>ATM Withdrawal </td>
                <td>{val4}</td>
              </tr>
              
            </tbody>
          </Table>
            
          </Tab>
         
          
      </Tabs>
        </div>
      </div>

      <div className="jumbotron bg-dark jumbotron-fluid" id="footer">
        
      
      <p id="copyr">All rights reserved | Cost Calculator KE 2019</p>
      </div>
      

    </div>
  );
}
}
export default App;
