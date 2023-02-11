import React, { Component } from 'react';
import APIService from 'C:/React/discountshoes/src/server/APIService.js';


export default class Signin extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             accounts: [],
             textForStorage :''
        }
      
        this.textForStorage = 'Hello World.'
       /* this.setState({ textForStorage:'Hello World.'});*/
        // setter
        
        localStorage.setItem( 'my-key', this.textForStorage);
        
        // getter
        
         this.textFromStorage = localStorage.getItem('my-key');
    }
     


    componentDidMount(){
        APIService.getBooks2().then((data) => {
            this.setState({ accounts: data })
           // console.log(this.state.accounts,' ','iyiuy',' ',localStorage.getItem('my-key'))
           
            this.state.accounts.map((element)=> {   
            //    console.log('Items :'+element);
            }
            );
            
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });
    }
    

    
    render() {
        
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}