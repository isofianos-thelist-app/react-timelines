import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Marker from '.'
import { getDayMonth } from '../../../utils/formatDate'

const ONE_MINUTE_IN_MILLISECONDS = 1 * 60 * 1000;

class NowMarker extends PureComponent {

  state = { now: this.props.now }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      this.props.nowRefreshInterval || ONE_MINUTE_IN_MILLISECONDS
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dateTimeNow = new Date(`${year}-${month}-${day}T${hour}:${minutes}:${seconds}.000Z`);
    console.log(dateTimeNow);
    this.setState({ now: dateTimeNow });
  }

  render() {
    const { time, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(this.state.now)} visible={visible}>
        <div>
          <div>Now</div>
          <strong>{getDayMonth(this.state.now)}</strong>
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
  nowRefreshInterval: PropTypes.number
}

export default NowMarker
