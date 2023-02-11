import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import "./styling/pagStyling.css";
import axios from 'axios';
import withNavigateHook from './withNavigateHook';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state ={ itemn:"",purchdate:'',exdate:'',itmprice:'',itmquant:'',
        mes:'',
          // itemn:React.createRef(),
          // handleItemName : this.handleItemName.bind(this),
        // let navigate:''
        } //{ itemn: '' }';
        this.handleToContact = this.handleToContact.bind(this);
      }
    //  navigate = useNavigate();
    handleItemName = event => {
        this.setState({ itemn:event.target.value});
        console.log("Item "+this.state.itemn);
      }; 
    handleItemName2 = event => { this.setState({ purchdate:event.target.value});console.log("purchdate "+this.state.purchdate);}
  handleItemName3 = event => { this.setState({ exdate:event.target.value});console.log("exdate "+this.state.exdate);}
  handleItemName4 = event => { this.setState({ itmprice:event.target.value});console.log("itmprice "+this.state.itmprice);}
  handleItemName5 = event => {   this.setState({ itmquant:event.target.value}); console.log("Item "+this.state.itmquant);}

  handleToProduct = () => {
    console.log("To product");
    this.props.navigation('/viewall');
}

handleToContact() {
    console.log("To contact");
    this.props.navigation('/');
}

    handleClick = () => {
        console.log('Click happened');
        console.log("Item in handle "+this.state.itemn);console.log("purchdate "+this.state.purchdate);console.log("exdate "+this.state.exdate);console.log("itmprice "+this.state.itmprice);
        console.log("Item "+this.state.itmquant);
        //axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token1')}`
        axios.post('http://localhost:8080/items1',{headers:  {'Authorization':   `Bearer ${localStorage.getItem('token1')}` }} ,{
          product: this.state.itemn,
          purchasedate: this.state.purchdate,
          expdate:this.state.exdate,
          price:this.state.itmprice,
          quantity:this.state.itmquant
        })
        .then((response) => {
          const mes1='Item Added';
          console.log(response);
          this.setState({ mes:mes1})

        }, (error) => {
          const mes1='Error item not added';
          console.log(error);
          this.setState({ mes:mes1})
        });      
      };
      
    render() {
    return (
        <>

        <div className="pagsstyle1">
        <h1>Add Items</h1>
        <div>
       <label for="iid">Enter the item name: </label>
       <input type="text" name="iid" id="iid"  onChange={this.handleItemName} value={this.state.itemn} ></input><br/>
       <label for="purchdate">Enter the item purchasedate: </label>
       <input type="text" name="purcdate" id="purcdate" required onChange={this.handleItemName2} value={this.state.purchdate} ></input><br/>
       <label for="exdate">Enter the item expirationdate: </label>
       <input type="text" name="exdate" id="exdate" required onChange={this.handleItemName3} value={this.state.exdate} ></input><br/>
       <label for="itemprice">Enter the item price: </label>
       <input type="text" name="itemprice" id="itemprice" required onChange={this.handleItemName4} value={this.state.itmprice} ></input><br/>
       <label for="itemquant">Enter the item quantity: </label>
       <input type="text" name="itemquant" id="itemquant" required onChange={this.handleItemName5} value={this.state.itmquant}  ></input><br/>
       <input type="button" onClick={this.handleClick} value="Submit"/>
       </div>
       <div>
                <button onClick={this.handleToProduct}>To Menu</button>
                <button onClick={this.handleToContact}>To Main/Logout</button>
            </div>
       <h1>{this.state.mes}  </h1>
       <p>
     
      </p>
       </div> 
      
        </>
    );
    }
}

export default withNavigateHook(AddItem);