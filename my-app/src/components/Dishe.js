import React,{Component} from 'react';


class Dish extends Component{


    render(){

        return(
          
            <div className="food">
                <label>שם המנה</label>
                 <p>{this.props.name}</p>
                <label>פרוט</label>
                 <p>{this.props.details}</p> 
                <label>מחיר</label>
                <p>{this.props.price}</p> 
                <label>תמונה</label>
                <p>{this.props.picture}</p> 
            </div>
        );
    }


}export default Dish;
