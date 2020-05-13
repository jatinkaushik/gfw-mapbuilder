import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../../configs/dojoConfig';
import store from './store/index';
import { MapBuilderMain } from 'js/MapBuilderMain';

/*
 * Setting webpack's public path dynamically instead of statically at the compilation process.
 * This allows users of the library to be able to host JS main bundle and its chunks anywhere they
 * like as long as all js files are in the same directory. Setting path dynamically allows entry .html
 * file to live separately from JS bundle files which is required for CDN/CMS deployments of
 * Mapbuilder.
 * https://webpack.js.org/guides/public-path/
 *
 * */
//@ts-ignore
const url = new URL(document.currentScript.src);
const widgetLink = url.href.substring(0, url.href.lastIndexOf('/') + 1);
//@ts-ignore
__webpack_public_path__ = widgetLink;

declare global {
  interface Window {
    MapBuilder: Function;
  }
}

interface BuilderMain {
  render: Function;
}

class MapBuilder {
  element: string;
  config: object;
  builderMain: BuilderMain;

  constructor(element: string, config: object) {
    this.config = config;
    this.element = element;
    this.builderMain = new MapBuilderMain(config);

    this.render();
  }

  render(): void {
    ReactDOM.render(
      <Provider store={store}>{this.builderMain.render()}</Provider>,
      document.getElementById(this.element)
    );
  }
}

window.MapBuilder = MapBuilder;
