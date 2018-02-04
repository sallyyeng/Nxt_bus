// import React, { Component } from 'react'
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios'

// class NewSearch extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       direction: '',
//       busSelection: '',
//       busStop: '',
//       busStopId: '',

//       directions: ['Inbound', 'Outbound'],

//       buses: [],
//       stops: [],
//       stopsIds: [],
//     }
//   }

//   componentWillMount = () => {
//     this.getBuses();
//   }

//   onNameChange = (e, { value }) => this.setState({ name: value })

//   onDirectionSelection = (e, { value }) => this.setState({ direction: value }, this.props.setDirectionLabel(value))

//   onBusSelection = (e, { value }) => {
//     const  { setBusLabel } = this.props;
//     setBusLabel(value);
//     this.setState({ busSelection: value }, this.getStops);
//   }

//   onStopSelection = (e, { value }) => {
//     const { stops, stopsIds } = this.state
//     this.setState({
//       busStop: value,
//       busStopId: stopsIds[stops.indexOf(value)]
//     }, this.props.setStopLabel(value))
//   }

//   onGetPredictionsClick = () => {
//     const { name, busSelection, busStopId, busStop, direction } = this.state
//     const { getPredictions } = this.props

//     getPredictions(busSelection, busStopId, busStop, direction, name);
//   }

//   getBuses = () => {
//     axios.get('/buses')
//     .then(res => {
//       this.setState({buses: res.data.sort()})
//     })
//     .catch(err => {
//       console.error('unsuccessful getBuses req: ', error);
//     })
//   }

//   getStops = (value) => {
//     axios.get('/stops', {
//       params: {
//         busSelection: this.state.busSelection,
//         direction: this.state.direction
//       }
//     })
//     .then((res) => {
//       this.setState({
//         stops: res.data[0],
//         stopsIds: res.data[1]
//       });
//     })
//     .catch((error) => {
//       console.error('unsuccessful getStops req: ', error);
//     });
//   }

//   makeSemanticOptions = (array) => {
//     return array.map((elem, i) => {
//       return {
//         'key': i,
//         'text': elem,
//         'value': elem,
//       }
//     })
//   }

//   render = () => {
//     const { directions, direction, buses, stops } = this.state

//     return (
//       <div>
//         <div><h1>New Search</h1></div>
//         <br />
//         <Form>
//           <Form.Input
//             label='Name'
//             placeholder='Name'
//             onChange={this.onNameChange}
//             />
//           <Form.Dropdown
//             fluid
//             selection
//             label='Direction'
//             placeholder='Direction'
//             options={this.makeSemanticOptions(directions)}
//             onChange={this.onDirectionSelection}
//             />
//           <Form.Dropdown
//             fluid
//             selection
//             label='Bus Number'
//             placeholder='Bus Number'
//             options={this.makeSemanticOptions(buses)}
//             onChange={this.onBusSelection}
//             />
//           <Form.Dropdown
//             fluid
//             selection
//             label='Stop'
//             placeholder='Stop'
//             options={this.makeSemanticOptions(stops)}
//             onChange={this.onStopSelection}
//             />
//           <Button
//             onClick={this.onGetPredictionsClick}
//             >Get Predictions!</Button>
//         </Form>
//       </div>
//     )
//   }
// }

// export default NewSearch;

