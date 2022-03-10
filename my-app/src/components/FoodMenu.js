import React,{Component} from 'react'
import Dish from './Dishe'
import axios from '../axios'

class FoodMenu extends Component{


  state = {

    selectedDish: null,
    food:[
      {id:0, name:"מרק", price:70, picture:"מחמהחמכ"},
      {id:1, name:"מבושל בשרי",  price:80, picture:"מחמהחמכ"},
      {id:2,name:"אורז",  price:90, picture:"מחמהחמכ"},
      {id:3, name:"תפוח אדמה",  price:100, picture:"מחמהחמכ"},
    ]
}

// constructor(props) {
//   super(props);
//   this.food.setState(data)
// }


componentDidMount() {
  debugger;
  // console.log(this.props.songs);
  // if (this.props.songs == 0) {
      axios.get('/dishes').then(x => {
        console.log(x.data)
        this.setState({food:x.data})
          // this.props.onload(x.data)
      }).catch(x => {
        console.log(x)}

  // }

      )};

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
