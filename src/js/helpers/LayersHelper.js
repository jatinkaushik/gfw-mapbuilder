import layerKeys from 'constants/LayerConstants';
import rasterFuncs from 'utils/rasterFunctions';
import utils from 'utils/AppUtils';
import moment, { isMoment } from 'moment';
import {shortTermServices} from '../config';
import fireLayerFactory from '../utils/fireLayerFactory';
import layerUtils from 'utils/layerUtils';
import DynamicLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import resources from 'resources';

const LayersHelper = {

  /**
  * @param {string} layerId - id of layer to show
  */
  showLayer (layerId) {
    const layer = brApp.map.getLayer(layerId);
    if (layer) { layer.show(); }
  },
  showSubLayer (layer) {
    const {esriLayer} = layer;
    esriLayer.setVisibleLayers(esriLayer.visibleLayers);
  },
  /**
  * @param {string} layerId - id of layer to hide
  */
  hideLayer (layerId) {
    const layer = brApp.map.getLayer(layerId);
    if (layer) { layer.hide(); }
  },
  hideSubLayer (layer) {
    const {esriLayer} = layer;
    esriLayer.setVisibleLayers(esriLayer.visibleLayers);
  },

  updateFiresLayerDefinitions (startDate = null, endDate = null, layer, language, selectValue = null) {
    console.log('layer', layer);
    const layerObj = resources.layerPanel.GROUP_LCD.layers.filter(LCDLayer => LCDLayer.id === layer.id)[0];
    console.log('layerObj', layerObj);
    if (brApp.map) {
      const fireID = layer.id === 'VIIRS_ACTIVE_FIRES' ? 'viirs' : 'modis';
      const newLayer = fireLayerFactory(layerObj, language, fireID, selectValue);
      console.log('newLayer', newLayer);
      if (selectValue) {
        if (newLayer && newLayer.visible) {
        // normally you wouldn't alter the urls for a layer but since we have moved from one behemoth service to 4 different services, we need to modify the layer url and id.
        // We are hiding and showing the layer to avoid calling the service multiple times.
          //brApp.map.removeLayer(layer);
          //newLayer.esriLayer.hide();
          //brApp.map.removeLayer(layer);
          // brApp.map.addLayer(newLayer);
          const layaDefs = [];
          // switch (selectValue) {
          //   case '0': //past 24 hours
          //     // newLayer.url = shortTermServices[`${fireID}24HR`].url;
          //     // newLayer._url.path = shortTermServices[`${fireID}24HR`].url;
          //     // newLayer.setVisibleLayers([shortTermServices[`${fireID}24HR`].id]);
              
          //     brApp.map.removeLayer(layer);
          //     brApp.map.addLayer(newLayer);
          //     console.log('24HRS', newLayer);
              
          //     break;
          //   case '1': //past 48 hours
          //     // newLayer.url = shortTermServices[`${fireID}48HR`].url;
          //     // newLayer._url.path = shortTermServices[`${fireID}48HR`].url;
          //     // newLayer.setVisibleLayers([shortTermServices[`${fireID}48HR`].id]);
          //     brApp.map.removeLayer(layer);
          //     brApp.map.addLayer(newLayer);
          //     console.log('48HRS', newLayer);

          //     break;
          //   case '2': //past 72 hours
          //     newLayer.url = shortTermServices[`${fireID}7D`].url;
          //     newLayer._url.path = shortTermServices[`${fireID}7D`].url;
          //     newLayer.setVisibleLayers([shortTermServices[`${fireID}7D`].id]);
          //     layaDefs[shortTermServices[`${fireID}7D`].id] = `Date > date'${moment(new Date()).subtract(3, 'd').format('YYYY-MM-DD HH:mm:ss')}'`;
          //     break;
          //   case '3': //past 7 days
          //     newLayer.url = shortTermServices[`${fireID}7D`].url;
          //     newLayer._url.path = shortTermServices[`${fireID}7D`].url;
          //     newLayer.setVisibleLayers([shortTermServices[`${fireID}7D`].id]);
          //     break;
          //   case '4': //past 7 days
          //     const queryString = this.generateFiresQuery(startDate, endDate);
          //     const defs = [];

          //     newLayer.url = shortTermServices[`${fireID}1YR`].url;
          //     newLayer._url.path = shortTermServices[`${fireID}1YR`].url;
          //     newLayer.setVisibleLayers([shortTermServices[`${fireID}1YR`].id]);
          //     newLayer.visibleLayers.forEach(val => { defs[val] = queryString; });
          //     console.log('defs', defs);
          //     newLayer.setLayerDefinitions(defs);
          //     break;
          //   default:
          //     console.log('default');
          //     break;
          // }
          //newLayer.esriLayer.refresh();
          //newLayer.esriLayer.show();
          brApp.map.removeLayer(layer);
          brApp.map.addLayer(newLayer);
        }
      }
      // else {
      //   const queryString = this.generateFiresQuery(startDate, endDate);
      //   const defs = [];
      //   if (newLayer) {
      //     newLayer.hide();
      //     if (newLayer.url !== shortTermServices[`${fireID}1YR`].url) {
      //       newLayer.url = shortTermServices[`${fireID}1YR`].url;
      //       newLayer._url.path = shortTermServices[`${fireID}1YR`].url;
      //       newLayer.setVisibleLayers([shortTermServices[`${fireID}1YR`].id]);
      //     }
      //     newLayer.visibleLayers.forEach(val => { defs[val] = queryString; });
      //     newLayer.setLayerDefinitions(defs, dontRefresh);
      //     newLayer.show();
      //   }
      // }
    }
  },

  /**
  * Generate a date query for active fires layers
  * @param {number} filterValue - Numeric value representing the number of days to show in the output query
  * @return {string} Query String to use for Fires Filter
  */
  generateFiresQuery (startDate, endDate) {
    if (!isMoment(startDate)) {
      startDate = moment(startDate);
    }

    if (!isMoment(endDate)) {
      endDate = moment(endDate);
    }
    const start = `${startDate.year()}-${startDate.month() + 1}-${startDate.date()} ${startDate.hours()}:${startDate.minutes()}:${startDate.seconds()}`;
    const end = `${endDate.year()}-${endDate.month() + 1}-${endDate.date()} ${endDate.hours()}:${endDate.minutes()}:${endDate.seconds()}`;
    return 'ACQ_DATE > date \'' + start + '\'' + ' AND ' + 'ACQ_DATE < date \'' + end + '\'';
  },

  isLayerVisible (map, layerInfo) {
    // Non-webmap layers, always assume visible.
    let visible = true;
    // Layers have a visibleAtMapScale property which make this easy.
    if (layerInfo.esriLayer && layerInfo.esriLayer.loaded) {
      if (layerInfo.esriLayer.hasOwnProperty('visibleAtMapScale') && !layerInfo.esriLayer.visibleAtMapScale) {
        const scale = map.getScale();
        if ((scale > layerInfo.esriLayer.minScale) || (scale < layerInfo.esriLayer.maxScale)) {
          visible = false;
          layerInfo.visible = visible;
        }
      }
    }
    if (map && map.getScale && layerInfo.esriLayer) {
      // Explicitly check scale depencency for sub-layers in a dynamic map service.
      const scale = map.getScale();
      if (layerInfo.hasScaleDependency && ((scale > layerInfo.minScale && layerInfo.minScale !== 0) || scale < layerInfo.maxScale)) {
        visible = false;
        layerInfo.visible = visible;
      }
    }
    return visible;
  },

  updateTreeCoverDefinitions (density, map, layerPanel) {
    if (map.loaded) {
      //- Get the layer config, I am hardcoding en becuase I do not need anything language specific, just its config
      const lcGroupLayers = layerPanel.GROUP_LC ? layerPanel.GROUP_LC.layers : [];
      const layerConfig = utils.getObject(lcGroupLayers, 'id', layerKeys.TREE_COVER);
      const layer = map.getLayer(layerKeys.TREE_COVER);

      if (layer && layerConfig) {
        const renderingRule = rasterFuncs.getColormapRemap(layerConfig.colormap, [density, layerConfig.inputRange[1]], layerConfig.outputRange);
        layer.setRenderingRule(renderingRule);
      }
    }
  },

  updateAGBiomassLayer (density, map) {
    if (map.loaded) {
      const layer = map.getLayer(layerKeys.AG_BIOMASS);
      const mosaicRule = rasterFuncs.getBiomassMosaicRule(density);

      if (layer) {
        layer.setMosaicRule(mosaicRule);
      }
    }
  }

};

export { LayersHelper as default };
