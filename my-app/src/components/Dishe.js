import React,{Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
import './dish.css';

class Dish extends Component{
state={
  notImg:true
}
    seePicHandler=()=>{
      this.setState({notImg:!this.state.notImg})
      ;
    }
    render(){
      let divs = <p></p>;
        if (this.state.notImg) {
        divs=<div> 
        <label>פרוט</label>
        <p>{this.props.details}</p> 
        <label>מחיר</label>
        <p>{this.props.price}</p> 
        <label>תמונה</label>
        <p>{this.props.picture}</p> 
        
       <Button class="ui button" onClick={()=>this.seePicHandler()}>Click Here</Button>
       <div><button class="ui animated button"><div class="visible content">Next</div><div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i></div></button><button class="ui vertical animated button"><div class="hidden content">Shop</div><div class="visible content"><i aria-hidden="true" class="shop icon"></i></div></button><button class="ui fade animated button"><div class="visible content">Sign-up for a Pro account</div><div class="hidden content">$12.99 a month</div></button></div>
       </div>;
      }else{
         divs = <image src={this.props.notImg} />;
      }
       
  
        return(
          
            <div className="food">
              <label>שם המנה</label>
        <p>{this.props.name}</p>
               {divs}
            </div>
        );
    }


}export default Dish;
