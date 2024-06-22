// const About  = () => {
//     return (
//         <div>
//             Inside about section
//         </div>
//     )
// }

// export default About;

import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

        console.log("Child constructor")
    }

    componentDidMount() {
        console.log("Child did mount")
    }

    render () {
        return  <div className="card">
        <h4>In Class component of ABOut</h4>
        <h4>{this.state.show}</h4>
      </div>
    } 
}

export default About;