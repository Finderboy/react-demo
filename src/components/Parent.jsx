import React, { useState } from 'react';
function Parent({ name }) {
    const [myName, setMyName ] = useState(name);
    const changeName = () => {
        setMyName('new name');
    }
    return (
        <div>
            <h1>{ myName }</h1>
            <button onClick={ changeName }>点击</button>
        </div>
    )
}
export default Parent


// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: this.props.name
//         }
//         this.changeName = this.changeName.bind(this);
//     }
//     changeName() {
//         this.setState({name: 'new name'});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <button onClick={this.changeName}>点击</button>
//             </div>
//         )
//     }
// }
// export default Parent;
