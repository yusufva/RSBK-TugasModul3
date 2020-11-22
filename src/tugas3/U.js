import React, {Component} from "react"; 
 
class U extends Component {
    // tepat dibawah deklarasi class Child 
    constructor(props) {
        super(props);
        this.state = {
          tgl: new Date().toLocaleString()
        };
      }
    
      getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }
      componentDidMount() {         
        alert(`1`)     
      } 
    
      render() {
        return (
          <div class="date">
            <p> Date {this.state.tgl}</p>
          </div>
        );
      }
    }
 
export default U;