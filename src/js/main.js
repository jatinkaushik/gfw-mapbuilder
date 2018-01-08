/* eslint no-unused-vars: 0 */
import App from 'components/App';
import ShareModal from 'components/Modals/ShareModal';
import IdentityManager from 'esri/IdentityManager';
import arcgisPortal from 'esri/arcgis/Portal';
import {corsServers, assetUrls} from 'js/config';
import {loadJS, loadCSS } from 'utils/loaders';
import generateCSV from 'utils/csvUtils';
import esriConfig from 'esri/config';
import ReactDOM from 'react-dom';
import React from 'react';
import 'babel-polyfill';

if (!_babelPolyfill) { console.log('Missing Babel Polyfill.  May experience some weirdness in IE < 9.'); }

window.brApp = {
  // debug: location.search.slice(1).search('debug') > -1
  debugEnabled: true,
  debug: function (message) {
    if (this.debugEnabled) {
      var print = typeof message === 'string' ? console.log : console.dir;
      print.apply(console, [message]);
    }
  }
};

// Shim for rAF with timeout for callback
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

const configureApp = () => {
  corsServers.forEach((server) => { esriConfig.defaults.io.corsEnabledServers.push(server); });
};

/**
* Assets need to be loaded from base (if it is present) + url, or just url if _app.base is not set
* When deploying to specific versions, this must be used for all relative paths
*/
const lazyloadAssets = () => {
  const base = window._app.base ? window._app.base + '/' : '';

  loadCSS(`https://js.arcgis.com/3.20/dijit/themes/tundra/tundra.css`);
  loadCSS(`https://js.arcgis.com/3.20/esri/css/esri.css`);
};

const initializeApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  ReactDOM.render(<ShareModal />, document.getElementById('share-modal'));
};

configureApp();
lazyloadAssets();
// const portal = new arcgisPortal.Portal('http://ags104.blueraster.io/portal');
// portal.signIn().then(loggedInUser => {
//   console.log(loggedInUser);
//   console.log(loggedInUser.portal.defaultBasemap);
initializeApp();
// });
