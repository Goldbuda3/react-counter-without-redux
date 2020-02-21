class Counter extends React.Component {

    constructor(props) {

        super(props);

        console.log("constructor called")
        this.state = {
            value: 0
        };
    }

    handleClick() {
        let newState = {
            value: this.state.value + 1
        }

        this.setState(newState);
    }

    render() {
        console.log("rendering")
        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={() => this.handleClick()}>count</button>
            </div>
        )
    }
}
