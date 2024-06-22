import {Component} from 'react';
import About from './About';

class CardClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            img:'',
            name: "Veer",
            location: "Pune"
        }
        console.log("Parent CONSTRUCTOR")
    }

    increaseCount () {
       this.setState({
        count:  this.state.count + 1
       });
    }

    async componentDidMount() {
        console.log("PARENT did mount")
        const data = await fetch('https://api.github.com/users/meravimane');
        const json = await data.json();
        this.setState({
            img: json.avatar_url,
            name: json.name,
            location: json.location
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.img != '') {
            console.log("image did update")
        }
        console.log("Parent component did update")
    }

    render () {
        return  <div className="card">
        <img src={this.state.img}></img>
        <h2>Name : { this.state.name || "Raj"}</h2>
        <h3>Location: { this.state.location || "Mumbai" }</h3>
        <h4>In Class component</h4>
        <h4>{this.state.show}</h4>
        <h3>Count : {this.state.count}</h3>
        <About/>
        <button onClick={()=> {this.increaseCount()}}>Increase count</button>
      </div>
    } 
}

export default CardClass;