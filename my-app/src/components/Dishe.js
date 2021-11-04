import React,{Component} from 'react';
import { Outlet, Link } from "react-router-dom";
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
        <label>פרוט  {this.props.price}</label>
        {/* <div>{this.props.details}</div>  */}
        {/* <label>מחיר</label> */}
        {/* <p></p>  */}
        <label>תמונה</label>
        <p>{this.props.picture}</p> 
        <Link to="/DishIngredients">Dish ingredients</Link>

        
       </div>;
      }else{
         divs = <image src={this.props.notImg} />;
      }
       
  
        return(
          
            <div className="food">
              {/* <label>שם המנה</label> */}
        <p>{this.props.name}</p>
               {divs}
            </div>
        );
    }


}export default Dish;
