import React from "react";

class Tugas11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            hitungMundur: 100,
            show: true,
        };
    }

    componentDidMount() {
        let time = new Date().toLocaleTimeString();
        if (this.state.time === 0) {
            this.setState({
                time: time,
            });
        }

        this.timerTick = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        this.setState({
            show: false,
            hitungMundur: this.state.hitungMundur - 1,
        });
        clearInterval(this.timerTick);
    }

    componentDidUpdate() {
        if (this.state.hitungMundur === 0) {
            this.componentWillUnmount();
        }
    }

    tick() {
        let time = new Date().toLocaleTimeString();

        this.setState({
            time: time,
            hitungMundur: this.state.hitungMundur - 1,
        });
    }

    render() {
        let tampilan;

        if (this.state.show) {
            tampilan = (
                <>
                    <h2>Sekarang Jam : {this.state.time}</h2>
                    <h2>Hitung Mundur {this.state.hitungMundur}</h2>
                </>
            );
        }

        return <div className="tugas11">{tampilan}</div>;
    }
}

export default Tugas11;
