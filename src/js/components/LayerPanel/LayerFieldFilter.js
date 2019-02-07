import React, {Component, PropTypes} from 'react';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/query';
import Select from 'react-select';
import text from 'js/languages';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    color: 'rgb(51, 51, 51)',
    cursor: 'pointer',
    background: state.isSelected ? '#eee' : 'none',
    '&:hover': {
      background: '#eee'
    }
  }),
  control: (provided, state) => ({
      ...provided,
      fontSize: '12px',
      padding: '0px',
      cursor: 'text',
      minHeight: '30px',
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? '#f0ab00'
        : 'grey',
      '&:hover': {
        borderColor: state.isFocused
          ? '#f0ab00'
          : 'grey',
      }
  }),

};

export default class LayerFieldFilter extends Component {

  static contextTypes = {
    language: PropTypes.string.isRequired,
    map: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      value: 'None Selected',
      filters: []
    };

  }

  componentWillMount() {
    // Make request for dropdown options..
    const { layer } = this.props;
    const { filters } = this.state;

    if (layer.type === 'feature') {
      const url = layer.url;
      const queryTask = new QueryTask(url);
      const query = new Query();
      query.where = '1=1';
      query.returnGeometry = false;
      query.outFields = [layer.filterField];
      query.returnDistinctValues = true;
      queryTask.execute(query).then(res => {
        res.features.forEach((feature) => {
          filters.push({label: feature.attributes[layer.filterField], value: feature.attributes[layer.filterField]});
        });

        this.setState({ filters });
      });
    } else if (layer.type === 'dynamic') {
      const promises = [];

      layer.layerIds.forEach((id) => {
        const url = layer.url + '/' + layer.layerIds[id];
        const queryTask = new QueryTask(url);
        const query = new Query();
        query.where = '1=1';
        query.returnGeometry = false;
        query.outFields = [layer.filterField];
        query.returnDistinctValues = true;
        promises.push(queryTask.execute(query));
      });

      Promise.all(promises).then(results => {
        results.forEach((res) => {
          res.features.forEach((feature) => {
            if (!filters.find((filter) => filter.label === feature.attributes[layer.filterField].trim().length)) {
              filters.push({label: feature.attributes[layer.filterField], value: feature.attributes[layer.filterField]});
            }
          });
        });
        this.setState({ filters });

      });
    }

  }


  onSelectFilter = (option) => {
    const { value } = option;
    const { map } = this.context;
    const { layer } = this.props;

    const defExpression = !value ? '1=1' : `${layer.filterField} = '${value}'`;
    const mapLayer = map.getLayer(layer.id);

    if (layer.type === 'feature') {
      mapLayer.setDefinitionExpression(defExpression);
    } else if (layer.type === 'dynamic') {
      const layerDefinitions = [];
      layer.layerIds.forEach((id) => {
        layerDefinitions[id] = defExpression;
      });
      mapLayer.setLayerDefinitions(layerDefinitions);
    }
  }

  renderDropdownOptions = (option, index) => {
    return <option key={index} value={option.label}/>;
  }


  render () {
    const { filters } = this.state;
    const { language } = this.context;

    return (
      <div className='layer-field-filter'>
        { filters.length > 0 &&
          <div>
            <p>{text[language].FILTER_BY_GROUP}</p>
            <div className='layer-filter relative'>
              <Select
                styles={customStyles}
                onChange={this.onSelectFilter}
                options={filters}
                placeholder={'None Selected'}
                isSearchable={true}
                className={'layer-field-filter-select'}
                isClearable={true}
              />
            </div>
          </div>
        }

      </div>
    );
  }
}
