import layerKeys from 'constants/LayerConstants';
import layerActions from 'actions/LayerActions';
import modalActions from 'actions/ModalActions';
import LayersHelper from 'helpers/LayersHelper';
import LayerTransparency from './LayerTransparency';
import utils from 'utils/AppUtils';
import React, {
  Component,
  PropTypes
} from 'react';

// Info Icon Markup for innerHTML
const useSvg = '<use xlink:href="#shape-info" />';

export default class LayerCheckbox extends Component {

  static contextTypes = {
    language: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    map: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      if (this.props.checked) {
        if (this.props.subLayer) {
          LayersHelper.showSubLayer(this.props.layer);
        } else {
          LayersHelper.showLayer(this.props.layer.id);
          //- If the legend layer is present, update it
          this.updateLegendLayer(this.props.layer.id, { visible: true });
        }
      } else {
        if (this.props.subLayer) {
          LayersHelper.hideSubLayer(this.props.layer);
        } else {
          LayersHelper.hideLayer(this.props.layer.id);
          //- If the legend layer is present, update it
          this.updateLegendLayer(this.props.layer.id, { visible: false });
        }
      }
    }
  }

  /**
  * There is a dynamic layer with opacity set to 0, turn on or off its sub layers so they show up in the
  * legend, this is great for image services or other layers that don't have a legend but need one
  */
  updateLegendLayer (layerId, options) {
    const {settings, map, language} = this.context;
    const layersConfig = settings.layers[language];

    const conf = utils.getObject(layersConfig, 'id', layerId);
    if (conf && conf.legendLayer !== undefined) {
      const layer = map.getLayer(layerKeys.LEGEND_LAYER);
      const {visibleLayers} = layer;

      if (options.visible) {
        visibleLayers.push(conf.legendLayer);
        layer.show();
      } else {
        visibleLayers.splice(visibleLayers.indexOf(conf.legendLayer), 1);
        if (visibleLayers.length === 0) {
          layer.hide();
        }
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.checked !== this.props.checked || !!this.props.children;
  }

  render() {
    const {layer} = this.props;
    const {label, sublabel} = layer;
    // let {language} = this.context;
    const checked = this.props.checked ? 'active' : '';
    const disabled = layer.disabled ? 'disabled' : '';
    const hidden = LayersHelper.isLayerVisible(layer) ? '' : 'hidden';

    return (
      <div className={`layer-checkbox relative ${checked} ${disabled} ${hidden}`} >
        <span onClick={this.toggleLayer.bind(this)} className='toggle-switch pointer'><span /></span>
        <span onClick={this.toggleLayer.bind(this)} className='layer-checkbox-label pointer'>{label}</span>
        <span className='info-icon pointer' onClick={this.showInfo.bind(this)}>
          <svg dangerouslySetInnerHTML={{ __html: useSvg }}/>
        </span>
        {!sublabel ? null : <div className='layer-checkbox-sublabel'>{sublabel}</div>}
        {!this.props.children ? null :
          <div className={`layer-content-container flex ${this.props.checked ? '' : 'hidden'}`}>
            {this.props.children}
          </div>
        }
        <LayerTransparency layer={layer} visible={this.props.checked}></LayerTransparency>
      </div>
    );
  }

  showInfo () {
    const layer = this.props.layer;
    if (layer.disabled) { return; }
    modalActions.showLayerInfo(this.props.layer.id);
  }

  toggleLayer () {
    const {layer} = this.props;
    if (layer.disabled) { return; }
    if (layer.subId) {
      // TODO:  Update visible layers.
      if (this.props.checked) {
        layerActions.removeSubLayer(layer);
      } else {
        layerActions.addSubLayer(layer);
      }
    } else {
      if (this.props.checked) {
        layerActions.removeActiveLayer(layer.id);
      } else {
        layerActions.addActiveLayer(layer.id);
      }
    }
  }

}

LayerCheckbox.propTypes = {
  layer: React.PropTypes.object.isRequired,
  checked: React.PropTypes.bool.isRequired
};