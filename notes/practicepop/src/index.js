import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Popup extends React.Component  {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    {/* <button className="close" onClick={this.props.closePopup}>&times;</button> */}
                    <span class="close" onClick={this.props.closePopup}>&times;</span>
                </div>
            </div>
        );
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='app'>
                <h1>hihi</h1>
                <button onClick={this.togglePopup.bind(this)}>show  section</button>
                {this.state.showPopup ?
                    <Popup
                        text='Close This ISH'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
};



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
