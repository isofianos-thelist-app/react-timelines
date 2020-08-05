import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Marker from '.'
import { getDayMonth } from '../../../utils/formatDate'

class NowMarker extends PureComponent {

  state = {
    now: this.props.now
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      5 * 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time, visible } = this.props
    const { now } = this.state;
    console.log(now);
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>Now</div>
          <strong>{getDayMonth(now)}</strong>
        </div>
      </Marker>
    )
  }
}

NowMarker.propTypes = {
  time: PropTypes.shape({
    toX: PropTypes.func.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
}

export default NowMarker
