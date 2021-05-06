import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//   //** Getting the current location */
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Hi there!</div>;
// };

//** Refactoring from funtional to class component */

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: '' };

  //   //** Getting the current location */
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   (position) => {
  //   //     //We called setState
  //   //     this.setState({
  //   //       lat: position.coords.latitude,
  //   //       // long: position.coords.longitude,
  //   //     });
  //   //   },
  //   //   // (err) => console.log(err)
  //   //   (err) => {
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );
  // }

  //** This is replacement of constructor */
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    //** Getting the current location */
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
