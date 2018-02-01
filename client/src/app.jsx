import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import axios from 'axios'

import VerticalBar from './components/vertical_bar.jsx'
import Predictions from './components/predictions.jsx'
import SearchPanes from './components/search_panes.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: [],
      direction: '',
      busSelection: '',
      busStop: ''
    }
  }

  setPredictions = (predictions) => {
    this.setState({
      predictions: predictions
    })
  }

  getPredictions = (busSelection, busStopId, busStop, direction, name) => {
    console.log('stopID: ', busStopId, 'busNum: ', busSelection)
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
      console.log('result from predictions fetch: ', res)
      this.setPredictions(res.data.slice(0,3))
    })
    .catch((error) => {
      console.error('unsuccessful getPredictions req: ', error);
    });
  }

  setDirectionLabel = (direction) => this.setState({ direction: direction });
  setBusLabel = (busSelection) => this.setState({ busSelection: busSelection });
  setStopLabel = (busStop) => this.setState({ busStop: busStop });

  render() {
    const style = {
      verticalBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '900px'
      }
    }

    const { predictions, direction, busSelection, busStop } = this.state;

    return (
      <Grid padded='vertically'>
          <Grid.Column style={style.verticalBar} color='grey' width={4} textAlign='right'>
            <VerticalBar />
          </Grid.Column>

          <Grid.Column width={7}>
            <Predictions
              predictions={predictions}
              direction={direction}
              busSelection={busSelection}
              busStop={busStop}
            />
            { predictions.length > 0 ? ( <Divider /> ) : null }
            <SearchPanes
              getPredictions={this.getPredictions}
              setDirectionLabel={this.setDirectionLabel}
              setBusLabel={this.setBusLabel}
              setStopLabel={this.setStopLabel}
            />
          </Grid.Column>
      </Grid>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'))
