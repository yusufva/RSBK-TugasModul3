import React, {Component} from "react"; 
 
class I extends Component {
    // tepat dibawah deklarasi class Child 
    constructor(props) {
        super(props);
        this.state = {
           header: "Tugas Mod 3",
           isi: "Tugas kel 9"
        }
     }
     componentDidMount() {         
        alert(`Sabar broo!!`)   
    }
     render() {
        return (
           <div>
              <h1>{this.state.header}</h1>
              <h2>{this.state.isi}</h2>
           </div>
        );
     }
  }
 
export default I;