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
      <h4>{this.props.name}</h4>
      <Button color="secondary" variant="contained">Teilnehmen</Button>
      <div class="description">{this.props.desc}</div>
      {this.state.detailedInfos ? "Blablabla" : null }
      </Card>
  }
}


export default POI
