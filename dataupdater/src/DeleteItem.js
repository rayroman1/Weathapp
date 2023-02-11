import React, { Component } from 'react';
import "./styling/pagStyling.css";
import axios from 'axios';import { BrowserRouter, Route, Link } from "react-router-dom";

class DeleteItem extends Component {

    constructor(props) {
        super(props);
        this.state ={ itemn:"",purchdate:'',exdate:'',itmprice:'',itmquant:'', aitems:[],outp:'',i:'',delitem:'',
        handleItemName : this.handleItemName.bind(this)
          // itemn:React.createRef(),
          // handleItemName : this.handleItemName.bind(this),
           
        } //{ itemn: '' }';
      }

      componentDidMount() {
      axios.get('http://localhost:8080/items3').then((dataa) =>  { const r=dataa.data;
      //this.setState({persons:JSON.stringify(r)});
      //this.state.aitems=r;
      this.setState({ aitems:r}); let f='';
      this.state.aitems.forEach(movie => console.log(f=f+movie.id+' '+movie.product+' '+new Date(movie.purchasedate).toLocaleDateString()+' '+new Date(movie.expdate).toLocaleDateString()+' '+movie.quantity+' '+movie.price+'<br/>'))//this.setState({i:movie.id}), this.setState({f:this.state.f+this.state.i+<br/>}) ); //f+i+'<br/>'
      this.setState({i:f});
    }); 
    //  this.state.aitems.forEach(o => console.log(o));
    console.log('jhfgkj');    
    }
    




      
    handleItemName = event => {
        this.setState({ delitem:event.target.value});
       console.log("Item "+this.state.delitem);
      }; 
    

      handleClick = (event) => {
        console.log('Click happened');
        console.log("Item in handle "+this.state.itemn);console.log("purchdate "+this.state.purchdate);console.log("exdate "+this.state.exdate);console.log("itmprice "+this.state.itmprice);
        console.log("Item "+this.state.itmquant);

          this.setState({delitem:event.target.value});
        axios.delete(`http://localhost:8080/deltitem/+${this.state.delitem}`)  
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);})

      };

    render() {
    return (
        <>
        <div className="pagsstyle1">
        <h1>Delete Items</h1>
        <div>
         <div dangerouslySetInnerHTML={{__html: this.state.i}} />
       <label htmlFor="iid">Enter the item Id: </label>
       <input type="text" name="iid" id="iid"  onChange={this.handleItemName} value={this.state.delitem} ></input><br/>
      
       <input type="button" onClick={this.handleClick} value="Submit"/>
       </div>
       <Link to="/viewall" className="navStq">Go Back</Link> <Link to="/" className="navStq">Main/LogOut</Link>
       </div> 
      
        </>
    );
    }
}

export default DeleteItem;