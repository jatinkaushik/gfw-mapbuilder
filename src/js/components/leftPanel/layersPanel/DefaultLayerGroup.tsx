import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GenericLayerControl from './GenericLayerControl';
import DateRange from './DateRange';

import { RootState } from 'js/store';
import { setOpenLayerGroup } from 'js/store/appState/actions';

import { LayerProps } from 'js/store/mapview/types';

interface LayerGroupProps {
  layerGroupKey: string;
  layerGroupConfig: any;
}

const DefaultLayerGroup = (props: LayerGroupProps): React.ReactElement => {
  const { selectedLanguage, leftPanel } = useSelector(
    (store: RootState) => store.appState
  );

  const { allAvailableLayers } = useSelector(
    (store: RootState) => store.mapviewState
  );

  const dispatch = useDispatch();
  const { layerGroupKey, layerGroupConfig } = props;
  const groupLayerIds = layerGroupConfig.layers.map((layer: any) => layer.id);
  const layerGroupTitle = layerGroupConfig.label?.[selectedLanguage];
  const groupOpen = leftPanel.openLayerGroup === layerGroupKey;

  const handleGroupToggle = () => {
    const openGroupKey = groupOpen ? '' : layerGroupKey;
    dispatch(setOpenLayerGroup(openGroupKey));
  };

  const returnDateRange = (layer: LayerProps): JSX.Element | undefined => {
    /**
     * TODO
     * [ ] glad alerts
     * [ ] terra-I alerts
     */
    switch (layer.id) {
      case 'VIIRS_ACTIVE_FIRES':
      case 'MODIS_ACTIVE_FIRES':
        return <DateRange layer={layer} />;
      default:
        break;
    }
  };

  return (
    <div className="layer-group-container">
      <div
        className="layer-group-title"
        onClick={handleGroupToggle}
        onKeyPress={handleGroupToggle}
        role="button"
        tabIndex={0}
      >
        <span>{layerGroupTitle}</span>
        <button className="caret-button" onClick={handleGroupToggle}>
          {groupOpen ? '▼' : '▲'}
        </button>
      </div>
      <div className={groupOpen ? 'layers-control-container' : 'hidden'}>
        {allAvailableLayers
          .filter(laya => groupLayerIds.includes(laya.id))
          .map(layer => {
            return (
              <>
                <GenericLayerControl id={layer.id} key={layer.id} />
                {returnDateRange(layer)}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default DefaultLayerGroup;