class Application extends React.Component {
    render() {
        return (
            <canvas id="canvas"></canvas>
        )
    }
};

ReactDOM.render(<Application/>, document.getElementById('application_box'));
