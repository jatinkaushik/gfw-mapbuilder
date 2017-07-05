import Request from 'utils/request';
import MapStore from 'stores/MapStore';
import React from 'react';

export default class WebMapLegend extends React.Component {

  constructor (props) {
    console.log("CONSTRUCTOR");
    super(props);
    const {currentLayer} = MapStore.getState();
    this.state = { legendInfos: [], currentLayer: currentLayer };
  }

  storeDidUpdate = () => {
    const {currentLayer} = MapStore.getState();
    if(currentLayer === null) {
      return;
    }
    // Need to make a new request to update the legendInfos
    Request.getWebMapLegendInfos(this.props.url, [currentLayer.subIndex]).then(legendInfos => {
      if(this.refs.myRef) {
        this.setState({ legendInfos: legendInfos, currentLayer: currentLayer });
      }
    });
  };

  componentDidMount() {
    MapStore.listen(this.storeDidUpdate);

    Request.getWebMapLegendInfos(this.props.url, [this.props.layerIds]).then(legendInfos => {
      if(this.refs.myRef) {
        this.setState({ legendInfos: legendInfos });
      }
    });
  }

  itemMapper (item, index) {
    return (
      <div className='legend-row' key={index}>
        <img className='legend-icon' title={item.label} src={`data:image/png;base64,${item.imageData}`} />
        <div className='legend-label' key={index}>{item.label}</div>
      </div>
    );
  }

  render () {
    let bool, label;

    if(this.state.currentLayer === null) {
      bool = 'hidden';
    } else {
      bool = this.state.currentLayer.visible ? '' : 'hidden';
      label = this.state.currentLayer.label;
    }
    debugger;
    return (
      <div className={`parent-legend-container ${bool}`} ref="myRef">
        <div className={label}>{label}</div>
        <div className={`legend-container ${bool}`}>
          {this.state.legendInfos.length === 0 ? '' :
            <div className='crowdsource-legend'>
              {this.state.legendInfos.map(this.itemMapper, this)}
            </div>
          }
        </div>
      </div>
    );
  }
}
