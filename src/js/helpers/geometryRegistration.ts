import * as webMercatorUtils from 'esri/geometry/support/webMercatorUtils';
import { arcgisToGeoJSON } from 'js/helpers/spatialDataTransformation';
import { FeatureResult } from 'js/store/mapview/types';

//TODO: Will need to type this better
export function registerGeometry(feature: FeatureResult): Promise<any> {
  let geographic;

  if (feature.geometry.spatialReference.wkid === 4326) {
    geographic = feature.geometry;
  } else {
    geographic = webMercatorUtils.webMercatorToGeographic(feature.geometry);
  }

  const geojson = arcgisToGeoJSON(geographic);
  const geoStore = {
    geojson: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: geojson
        }
      ]
    }
  };
  const content = JSON.stringify(geoStore);

  //TODO: Extract to the endpoints config file
  return fetch('https://production-api.globalforestwatch.org/v1/geostore', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: content
  });
}