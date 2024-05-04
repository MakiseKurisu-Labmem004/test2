import React, {useEffect, useState} from 'react'
import axios from "./request"
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // just for test
        axios.get('').then(response => {
            console.log("wrong")
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('你好');
    }

    componentWillUnmount() {
        console.log('你不好');
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className={"container"}>
                <p className={"title"}>计数: {this.state.count}</p>
                <button onClick={this.handleClick} className={"button"}>增加</button>
            </div>
        );
    }
}

// const App = () => {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         // 仅用于测试
//         axios.get('').then(response => {
//             console.log("错误");
//         });
//     }, []);
//
//     useEffect(() => {
//         console.log('你好');
//     }, [count]);
//
//     useEffect(() => {
//         return () => {
//             console.log('你不好');
//         };
//     }, []);
//
//     const handleClick = () => {
//         setCount(count + 1);
//     };
//
//     return (
//         <div className="container">
//             <p className="title">计数: {count}</p>
//             <button onClick={handleClick} className="button">增加</button>
//         </div>
//     );
// };

export default App