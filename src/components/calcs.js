import React,{Component} from 'react';

export class Calcs extends Component {
    
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        
        this.setState({username: event.target.value});
      }
    
    
      render() {
        
        let val = '';
        Calcs.bar = val;

        if (this.state.username <= 0) {
          val = '';
        } 
        else if (this.state.username <= 100) {
          val = "FREE";
        } 
        else if (this.state.username <= 500) {
          val = 11;
        } 
        else if (this.state.username <= 1000) {
          val = 15;
        } 
        else if (this.state.username <= 1500) {
          val = 26;
        } 
        else if (this.state.username <= 2500) {
          val = 41;
        } 
        else {
          val = '';
        }
        return (
            <div className="calc">
                    
                </div>
        )
    }
}
export default Calcs;