import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import LayerToggleSwitch from './LayerToggleSwitch';
import LayerTransparencySlider from './LayerTransparencySlider';
import LayerRadioButton from './LayerRadioButton';
import CanopyDensityPicker from 'js/components/sharedComponents/CanopyDensityPicker';
import TimeSlider from 'js/components/sharedComponents/TimeSlider';
import DateRange from './DateRange';
import { esriQuery } from 'js/helpers/dataPanel/esriQuery';
import {
  renderModal,
  setInfoModalLayerID,
  setGladStart,
  setGladEnd
} from 'js/store/appState/actions';
import { RootState } from 'js/store';
import { mapController } from 'js/controllers/mapController';
import { densityEnabledLayers } from '../../../../../configs/layer-config';
import { ReactComponent as InfoIcon } from 'images/infoIcon.svg';
import { LayerVersionPicker } from './LayerVersionPicker';
import styled from 'styled-components';
import { LayerFactory } from 'js/helpers/LayerFactory';
import { layerControlsTranslations } from '../../../../../configs/leftPanel.translations';

interface GladControlsProps {
  customColorTheme?: string;
  layerConfig: any;
  selectedLanguage: string;
}

const GladControls = (props: GladControlsProps): JSX.Element => {
  const dispatch = useDispatch();
  const gladConfirmed = useSelector(
    (store: RootState) => store.appState.leftPanel.gladConfirmed
  );

  const gladStart = useSelector(
    (store: RootState) => store.appState.leftPanel.gladStart
  );

  const gladEnd = useSelector(
    (store: RootState) => store.appState.leftPanel.gladEnd
  );

  const getTodayDate = new Date().toISOString().split('T')[0];
  const [unconfirmedAlerts, setUnconfirmedAlerts] = React.useState(
    gladConfirmed
  );
  const [startDate, setStartDate] = React.useState(String(gladStart));
  const [endDate, setEndDate] = React.useState(gladEnd);

  function handleStartDateChange(e: any): void {
    setStartDate(e.target.value);
    //@ts-ignore
    const start = new Date(e.target.value).getJulian();
    //@ts-ignore
    const end = new Date(endDate).getJulian();
    const gladLayerOld: any = mapController._map!.findLayerById('GLAD_ALERTS');
    mapController._map?.remove(gladLayerOld);
    const gladLayerNew: any = LayerFactory(
      mapController._mapview,
      props.layerConfig
    );
    gladLayerNew.julianFrom = start;
    gladLayerNew.julianTo = end;
    mapController._map?.add(gladLayerNew);

    //update redux
    dispatch(setGladStart(e.target.value));
    dispatch(setGladEnd(endDate));
  }

  function handleEndDateChange(e: any): void {
    setEndDate(e.target.value);
    //@ts-ignore
    const end = new Date(e.target.value).getJulian();
    //@ts-ignore
    const start = new Date(startDate).getJulian();
    const gladLayerOld: any = mapController._map!.findLayerById('GLAD_ALERTS');
    mapController._map?.remove(gladLayerOld);
    const gladLayerNew: any = LayerFactory(
      mapController._mapview,
      props.layerConfig
    );
    gladLayerNew.julianFrom = start;
    gladLayerNew.julianTo = end;
    mapController._map?.add(gladLayerNew);

    //update redux
    dispatch(setGladStart(startDate));
    dispatch(setGladEnd(e.target.value));
  }

  function handleConfirmedAlertsToggle(): void {
    setUnconfirmedAlerts(!unconfirmedAlerts);
    const gladLayerOld: any = mapController._map!.findLayerById('GLAD_ALERTS');
    mapController._map?.remove(gladLayerOld);
    const gladLayerNew: any = LayerFactory(
      mapController._mapview,
      props.layerConfig
    );
    gladLayerNew.confirmed = !unconfirmedAlerts;
    mapController._map?.add(gladLayerNew);
  }

  const colorTheme = props.customColorTheme?.length
    ? props.customColorTheme
    : '#f0ab00';

  //Dynamic custom theme override using styled-components lib
  const CheckboxWrapper = styled.div`
    .styled-checkbox:checked + .styled-checkboxlabel:before {
      background-color: ${colorTheme};
    }
  `;

  return (
    <div className="glad-control-wrapper">
      <div className="glad-control-container">
        <div className="layer-checkbox">
          <CheckboxWrapper>
            <input
              type="checkbox"
              name="styled-checkbox"
              className="styled-checkbox"
              id="layer-checkbox-glad"
              checked={unconfirmedAlerts}
              onChange={handleConfirmedAlertsToggle}
            />
            <label
              className="styled-checkboxlabel"
              htmlFor="layer-checkbox-glad"
            ></label>
          </CheckboxWrapper>
        </div>
        <p>Hide unconfirmed alerts</p>
      </div>
      <div>
        <div className="calendar-wrapper">
          <div className="date-section-wrapper">
            <label htmlFor="start-date">
              {layerControlsTranslations[props.selectedLanguage].timeEnd}
            </label>
            <input
              className="date-time-toggle input"
              type="date"
              defaultValue={startDate}
              min={undefined}
              onChange={handleStartDateChange}
            />
          </div>

          <div className="date-section-wrapper">
            <label htmlFor="end-date">
              {layerControlsTranslations[props.selectedLanguage].timeEnd}
            </label>
            <input
              className="date-time-toggle input"
              type="date"
              value={endDate}
              max={getTodayDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LayerInfo {
  layerInfo: any;
  selectedLanguage: string;
}
const LayerFilterSelection = (props: LayerInfo): JSX.Element => {
  const { layerInfo, selectedLanguage } = props;
  const [options, setOptions] = React.useState<any>([]);

  function handleFilterSelection(option: any): void {
    let defExpression;
    if (option) {
      defExpression = `${layerInfo.filterField[selectedLanguage]} = '${option.value}'`;
    } else {
      defExpression = '1=1';
    }
    mapController.changeLayerDefinitionExpression(layerInfo, defExpression);
  }

  React.useEffect(() => {
    //Fetch Selections on load
    async function getFilters(): Promise<void> {
      const queryParams = {
        where: '1=1',
        returnGeometry: false,
        outFields: layerInfo.filterField[selectedLanguage],
        returnDistinctValues: true
      };

      if (layerInfo.type === 'feature') {
        const url = layerInfo.url;
        const fieldResponse = await esriQuery(url, queryParams);
        const fieldOptions = fieldResponse.features.map((feature: any) => {
          const entry =
            feature.attributes[layerInfo.filterField[selectedLanguage]];
          return {
            label: entry,
            value: entry
          };
        });
        setOptions(fieldOptions);
      } else {
        const fieldPromises = layerInfo.layerIds.map((id: number) => {
          const subUrl = `${layerInfo.url}/${id}`;
          return esriQuery(subUrl, queryParams);
        });
        Promise.all(fieldPromises).then(values => {
          const allFieldOptions: any = [];
          values.forEach((value: any) => {
            const fieldOptions = value.features
              .map((feature: any) => {
                const entry =
                  feature.attributes[layerInfo.filterField[selectedLanguage]];
                return {
                  label: entry,
                  value: entry
                };
              })
              .filter((option: any) => option.label !== null);
            allFieldOptions.push(fieldOptions);
          });
          setOptions(allFieldOptions[0]);
        });
      }
    }
    getFilters();
  }, [selectedLanguage]);

  const customStyles = {
    clearIndicator: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      padding: '4px'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      padding: '4px'
    }),
    container: (provided: any, state: any) => ({
      ...provided,
      fontSize: '12px',
      width: '200px'
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      padding: '4px'
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: '20px'
    })
  };

  return (
    <div className="layer-filter-container">
      <p style={{ fontSize: '11px' }}>Filter by category</p>
      <Select
        styles={customStyles}
        placeholder="None Selected"
        options={options}
        isSearchable
        onChange={handleFilterSelection}
        isClearable={true}
      />
    </div>
  );
};

interface LayerControlProps {
  id: string;
  sublayer?: boolean;
  parentID?: string;
  type: 'radio' | 'checkbox' | 'nested' | 'default';
  activeLayer?: string;
  sendActiveLayer?: (val: string) => void;
}

const GenericLayerControl = (props: LayerControlProps): React.ReactElement => {
  const dispatch = useDispatch();
  const allAvailableLayers = useSelector(
    (store: RootState) => store.mapviewState.allAvailableLayers
  );
  const selectedLanguage = useSelector(
    (store: RootState) => store.appState.selectedLanguage
  );

  const customColorTheme = useSelector(
    (store: RootState) => store.appSettings.customColorTheme
  );
  const layer = allAvailableLayers.find(l => l.id === props.id);

  //Determine if we need density control on this layer
  const densityPicker = layer && densityEnabledLayers.includes(layer.id);

  const returnTimeSlider = (id: string): any => {
    switch (id) {
      case 'TREE_COVER_LOSS':
        return <TimeSlider layerID={id} />;
      default:
        return null;
    }
  };

  const openInfoModal = (): void => {
    if (layer) {
      dispatch(renderModal('InfoContent'));
      dispatch(setInfoModalLayerID(layer.id));
    }
    return;
  };

  const returnSubtitle = (): JSX.Element | undefined => {
    let subTitle = '';
    if (layer?.sublabel) {
      subTitle = layer.sublabel[selectedLanguage];

      return (
        <>
          <br />
          <span className="layer-subtitle">{subTitle}</span>
        </>
      );
    } else {
      return;
    }
  };

  const returnDateRange = (
    id: string,
    layerConfig: any,
    selectedLanguage: string
  ): JSX.Element | undefined => {
    if (!layer) {
      return;
    }
    /**
     * TODO
     * [ ] glad alerts
     * [ ] terra-I alerts
     */
    switch (id) {
      case 'VIIRS_ACTIVE_FIRES':
      case 'MODIS_ACTIVE_FIRES':
        return <DateRange layer={layer} />;
      case 'GLAD_ALERTS':
        return (
          <GladControls
            customColorTheme={customColorTheme}
            layerConfig={layerConfig}
            selectedLanguage={selectedLanguage}
          />
        );
      default:
        break;
    }
  };

  const returnLayerControl = (): JSX.Element => {
    function handleLayerRadioClick(val: string) {
      if (props.sendActiveLayer) {
        props.sendActiveLayer(val);
      }
    }
    if (props.type === 'radio') {
      return (
        <LayerRadioButton
          layerID={props.id}
          activeLayerID={props.activeLayer}
          handleLayerRadioClick={handleLayerRadioClick}
        />
      );
    } else {
      return (
        <LayerToggleSwitch
          layerIsVisible={layer?.visible}
          layerID={props.id}
          sublayer={props.sublayer}
          parentID={props.parentID}
        />
      );
    }
  };

  return (
    <>
      <div className="layers-control-checkbox">
        {returnLayerControl()}
        <div className="title-wrapper">
          <span className="layer-label">{layer?.title}</span>
          {returnSubtitle()}
        </div>
        <div className="info-icon-container" onClick={() => openInfoModal()}>
          <InfoIcon width={10} height={10} fill={'#fff'} />
        </div>
      </div>
      {layer?.visible && returnTimeSlider(props.id)}
      {layer?.visible && densityPicker && <CanopyDensityPicker label={true} />}
      {layer?.visible && layer.versions && (
        <LayerVersionPicker
          layerInfo={layer}
          selectedLanguage={selectedLanguage}
        />
      )}
      {layer?.visible && layer.filterField && (
        <LayerFilterSelection
          layerInfo={layer}
          selectedLanguage={selectedLanguage}
        />
      )}
      {layer?.visible && returnDateRange(props.id, layer, selectedLanguage)}
      {layer?.visible && (
        <LayerTransparencySlider
          layerID={props.id}
          layerOpacity={layer?.opacity}
          sublayer={props.sublayer}
          parentID={props.parentID}
        />
      )}
    </>
  );
};

export default GenericLayerControl;
