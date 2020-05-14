

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}





//useState 


function App(){
    const [count ]= useState(0)
    return(
        <div>
        <h1>{count} </h1>
        <button></button>
        </div>
    )
}
