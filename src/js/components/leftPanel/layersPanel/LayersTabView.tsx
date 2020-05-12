import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'js/store';
import { mapController } from 'js/controllers/mapController';
import 'css/leftpanel.scss';
import WebmapLayersGroup from './WebmapLayersGroup';
import BasemapLayersGroup from './BasemapLayersGroup';
import DefaultLayerGroup from './DefaultLayerGroup';
import ImageryLayersGroup from './ImageryLayersGroup';
import { layersPanelTranslations } from '../../../../../configs/leftPanel.translations';

interface LayerControlProps {
  selectedLanguage: string;
}
const AllLayerControls = (props: LayerControlProps): JSX.Element => {
  return (
    <div className="all-layer-control-container">
      <span>
        {layersPanelTranslations[props.selectedLanguage]?.layers || 'Layers'}
      </span>
      <button onClick={() => mapController.clearAllLayers()}>
        {layersPanelTranslations[props.selectedLanguage]?.clearAll ||
          'Clear All'}
      </button>
      <button onClick={() => mapController.selectAllLayers()}>
        {layersPanelTranslations[props.selectedLanguage]?.selectAll ||
          'Select All'}
      </button>
    </div>
  );
};

interface LayersTabViewProps {
  key: string;
  label: string;
}
const LayersTabView = (props: LayersTabViewProps) => {
  const activeTab = useSelector(
    (store: RootState) => store.appState.leftPanel.activeTab
  );
  const tabViewVisible = useSelector(
    (store: RootState) => store.appState.leftPanel.tabViewVisible
  );
  const hideWidgetActive = useSelector(
    (store: RootState) => store.appState.hideWidgetActive
  );
  const selectedLanguage = useSelector(
    (store: RootState) => store.appState.selectedLanguage
  );
  const recentImagery = useSelector(
    (store: RootState) => store.appSettings.recentImagery
  );

  const layerPanel = useSelector(
    (store: RootState) => store.appSettings.layerPanel
  );
  const tabViewIsVisible = tabViewVisible && activeTab === props.label;
  const layerGroupsToRender = Object.keys(layerPanel)
    .sort((a: string, b: string) => layerPanel[a].order - layerPanel[b].order)
    .map((layerGroupKey: string) => {
      switch (layerGroupKey) {
        case 'GROUP_WEBMAP':
          return (
            <WebmapLayersGroup
              key={layerGroupKey}
              layerGroupKey={layerGroupKey}
              layerGroupConfig={layerPanel[layerGroupKey]}
            />
          );
        case 'GROUP_BASEMAP':
          return (
            <BasemapLayersGroup
              key={layerGroupKey}
              layerGroupKey={layerGroupKey}
              layerGroupConfig={layerPanel[layerGroupKey]}
            />
          );
        case 'GROUP_IMAGERY':
          if (!recentImagery) return null;
          return (
            <ImageryLayersGroup
              key={layerGroupKey}
              layerGroupKey={layerGroupKey}
              layerGroupConfig={layerPanel[layerGroupKey]}
            />
          );
        case 'extraLayers':
          return null;
        default:
          return (
            <DefaultLayerGroup
              key={layerGroupKey}
              layerGroupKey={layerGroupKey}
              layerGroupConfig={layerPanel[layerGroupKey]}
            />
          );
      }
    });
  return (
    <>
      {tabViewIsVisible && (
        <div
          className={
            hideWidgetActive ? 'hide tabview-container' : 'tabview-container'
          }
        >
          <AllLayerControls selectedLanguage={selectedLanguage} />
          {layerGroupsToRender}
        </div>
      )}
    </>
  );
};

export default LayersTabView;
