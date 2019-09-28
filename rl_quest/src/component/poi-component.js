import Card from '@material-ui/core/Card'
import React from 'react';
import Button from '@material-ui/core/Button'

class POI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { detailedInfos: false }
  }
  
  toggleExpand = () => {
    this.setState({ detailedInfos: !this.state.detailedInfos })
  }
  
  calcClasses() {
    return this.state.detailedInfos ? "infoBox fullscreen" : "infoBox"
  }
  
  render() {
    return <Card className={this.calcClasses()} onClick={this.toggleExpand}>
      <h1>{this.props.name}</h1>
      <Button color="secondary" variant="contained">Teilnehmen</Button>
      <tr>
        <td>
          <div className="description">{this.props.desc}</div>
        </td>
        <td>
          <div className="xp">5.000.000 XP</div>
        </td>
      </tr>


      </Card>
  }
}


export default POI
