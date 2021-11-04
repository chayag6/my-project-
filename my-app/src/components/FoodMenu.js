import React,{Component} from 'react'
import Dish from './Dishe'

class FoodMenu extends Component{


  state = {

    selectedDish: null,
    food:[
      {id:0, details:"מתוק",name:"מרק", price:70, picture:"מחמהחמכ"},
      {id:1, details:"מלוח",name:"מבושל בשרי",  price:80, picture:"מחמהחמכ"},
      {id:2, details:"חריף",name:"אורז",  price:90, picture:"מחמהחמכ"},
      {id:3, details:"מתוק",name:"תפוח אדמה",  price:100, picture:"מחמהחמכ"},

    ]
}

  selectedHandler = (id) => {
    this.setState({ selectedDish: id })
    console.log(id);
}

    
    render(){
      // console.log(food);
      const food = this.state.food.map(f => {
        return < Dish name={f.name} key={f.id} details={f.details} price ={f.price} picture={f.picture} clicked={() => { this.selectedHandler(f.id) }}></Dish>
    })

        return(
          
            <div className="food2">
              {food}
            </div>
        );
    }


}export default FoodMenu;
