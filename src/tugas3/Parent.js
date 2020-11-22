import {Component} from "react"; 
import React from "react"; 
import Child from "./Child";
import I from "./I";
import A from "./A"; 
import U from "./U";
   
 
class Parent extends Component{ 
 
    state = {         
        komponenMuncul : true     
    } 
 
    ubahKomponenMuncul = () => { 
        this.setState((state) => {             
            return {komponenMuncul : !this.state.komponenMuncul}         
        })     
    } 
 
    render() {         
        return (             
        <div>                 
            {this.state.komponenMuncul ? <I/> : ''}
            {this.state.komponenMuncul ? <Child/> : ''}
            {this.state.komponenMuncul ? <A/> : ''}
            {this.state.komponenMuncul ? <U/> : ''}                     
            <button onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'hilangkan' : 'munculkan'} komponen!</button>             
        </div>         
            );     
        } 
    } 
 
export default Parent;