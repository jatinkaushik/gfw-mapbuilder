import DynamicLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import layerUtils from 'utils/layerUtils';
import {shortTermServices} from '../config';
 
 export default (layerObj, language, fireID, selectValue) => {
    const options = {};
    options.id = layerObj.id;
    options.visible = layerObj.visible || false;
    options.opacity = layerObj.opacity || 1.0;
    if (layerObj.popup && layerObj.layerIds) {
        options.infoTemplates = {};
        const template = layerUtils.makeInfoTemplate(layerObj.popup, language);
        layerObj.layerIds.forEach((id) => {
            options.infoTemplates[id] = { infoTemplate: template };
        });
    }
    
    switch (selectValue) {
        case '0':
            layerObj.url = shortTermServices[`${fireID}24HR`].url;
            layerObj.esriLayer._url.path = shortTermServices[`${fireID}24HR`].url;
            layerObj.esriLayer.setVisibleLayers([shortTermServices[`${fireID}24HR`].id]);
            break;
        case '1':
            layerObj.url = shortTermServices[`${fireID}48HR`].url;
            layerObj.esriLayer._url.path = shortTermServices[`${fireID}48HR`].url;
            layerObj.esriLayer.setVisibleLayers([shortTermServices[`${fireID}48HR`].id]);
            break;
        case '2':
            break;
        case '3':
            break;
    }
    
    const esriLayer = new DynamicLayer(layerObj.url, options);
    esriLayer.legendLayer = layerObj.legendLayer || null;
    esriLayer.layerIds = layerObj.layerIds;
    esriLayer.order = layerObj.order;
    esriLayer.label = layerObj.label;
    
    return esriLayer;
};
