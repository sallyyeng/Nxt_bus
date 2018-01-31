import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      direction: '',
      busSelection: '',
      busStop: '',
      busStopId: '',

      directions: ['Inbound', 'Outbound'],

      buses: [],
      stops: [],
      stopsIds: [],

      predictions: [],
      pastSearches: [],
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onDirectionSelection = this.onDirectionSelection.bind(this);
    this.onBusSelection = this.onBusSelection.bind(this);
    this.onStopSelection = this.onStopSelection.bind(this);

    this.getStops = this.getStops.bind(this);
    this.getBuses = this.getBuses.bind(this);
    this.getPredictions = this.getPredictions.bind(this);
  }

  componentWillMount() {
    this.getBuses();
  }

  onNameChange(event) { this.setState({ name: event.target.value})}

  onDirectionSelection(e, { value }) {this.setState({ direction: value})}

  onBusSelection(e, { value }) {this.setState({ busSelection: value}, this.getStops)}

  onStopSelection(e, { value }) {
    const { stops, stopsIds } = this.state
    console.log(value);
    console.log(stopsIds[stops.indexOf(value)]);
    this.setState({
      busStop: value,
      busStopId: stopsIds[stops.indexOf(value)]
    })
  }

  getBuses() {
    axios.get('/buses')
    .then(res => {
      this.setState({buses: res.data.sort()})
    })
    .catch(err => {
      console.error('unsuccessful getBuses req: ', error);
    })
  }

  getStops() {
    console.log(this.state);
    axios.get('/stops', {
      params: {
        busSelection: this.state.busSelection,
        direction: this.state.direction
      }
    })
    .then((res) => {
      this.setState({
        stops: res.data[0],
        stopsIds: res.data[1]
      });
    })
    .catch((error) => {
      console.error('unsuccessful getStops req: ', error);
    });
  }

  getPredictions() {
    console.log('inside get predictions')
    const { name, busSelection, busStopId, busStop, direction } = this.state
    axios.get('/predictions', {
      params: {
        name: name,
        busSelection: busSelection,
        busStopId: busStopId,
        busStop: busStop,
        direction: direction,
      }
    })
    .then((res) => {
      console.log('successful get request /predictions');
      console.log('RETURNED from getPredictions: ', res.data);

      this.setState({predictions: res.data.slice(0,3)})
    })
    .catch((error) => {
      console.error('unsuccessful getPredictions req: ', error);
    });
  }

  makeSemanticOptions(array) {
    return array.map(elem => {
      return {
        'key': elem,
        'text': elem,
        'value': elem,
      }
    })
  }

  render() {
    const { directions, direction, buses, stops } = this.state
    return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            label='Name'
            placeholder='Name'
            onChange={this.onNameChange}
            />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Direction'
            options={this.makeSemanticOptions(directions)}
            onChange={this.onDirectionSelection}
            />
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            options={this.makeSemanticOptions(buses)}
            onChange={this.onBusSelection}
            />
          <Form.Dropdown
            fluid
            selection
            label='Stop'
            placeholder='Stop'
            options={this.makeSemanticOptions(stops)}
            onChange={this.onStopSelection}
            />
          <Button
            >Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

export default NewSearch;
