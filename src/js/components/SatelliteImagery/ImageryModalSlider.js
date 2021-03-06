import React, { Component, PropTypes } from 'react';
import Slider from 'rc-slider';
import MapActions from 'actions/MapActions';
import {defaultColorTheme} from '../../config';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class AnalysisRangeSlider extends Component {
  static contextTypes = {
    settings: PropTypes.object.isRequired
  };
  
  constructor(props) {
    super(props);

    const { initialStartValue, initialEndValue, bounds } = props;

    this.rangeArray = [...Array(bounds[1] + 1 - bounds[0]).keys()].map((i, idx) => idx + bounds[0]);
    const start = initialStartValue || bounds[0];
    const end = initialEndValue || bounds[1];

    this.state = {
      rangeSliderValue: [
        start,
        end,
      ],
      sliderMarks: {
        [start]: <small>{start}</small>,
        [end]: <small>{end}</small>,
      },
    };
  }

  componentDidMount() {
    const {
      rangeSliderCallback,
      analysisId,
      startParamName,
      endParamName,
      valueType,
      combineParams,
      valueSeparator,
    } = this.props;
    const { rangeSliderValue } = this.state;

    // Set the default params to to pass in the request
    rangeSliderCallback(
      rangeSliderValue,
      analysisId,
      combineParams,
      startParamName,
      endParamName,
      valueSeparator,
      valueType,
    );

    MapActions.updateAnalysisSliderIndices({
      id: analysisId,
      indices: [this.rangeArray.indexOf(rangeSliderValue[0]), this.rangeArray.indexOf(rangeSliderValue[1])]
    });
  }

  handleChange = rangeSliderValue => {
    const [ rangeSliderStart, rangeSliderEnd ] = rangeSliderValue;
    this.setState({
      rangeSliderValue,
      sliderMarks: {
        [rangeSliderStart]: <small>{rangeSliderStart}</small>,
        [rangeSliderEnd]: <small>{rangeSliderEnd}</small>,
      },
    });
  }

  render() {
    const { bounds, step, rangeSliderCallback } = this.props;
    const { rangeSliderValue, sliderMarks } = this.state;
    const { customColorTheme } = this.context.settings;
    return (
      <div className='analysis-results__select-form-item-container'>
        <Range
          className='select-form-item'
          min={bounds[0]}
          max={bounds[1]}
          value={rangeSliderValue}
          allowCross={false}
          onChange={this.handleChange}
          onAfterChange={rangeSliderCallback}
          step={step}
          marks={sliderMarks}
          dots={bounds[1] - bounds[0] <= 20}
          trackStyle={[{backgroundColor: `${customColorTheme && customColorTheme ? customColorTheme : defaultColorTheme}`}]}
          handleStyle={[{borderColor: `${customColorTheme && customColorTheme ? customColorTheme : defaultColorTheme}`}]}
          dotStyle={{border: `1px solid ${customColorTheme && customColorTheme ? customColorTheme : defaultColorTheme}`}}
          activeDotStyle={{border: `1px solid ${customColorTheme && customColorTheme ? customColorTheme : defaultColorTheme}`}}
        />
      </div>
    );
  }
}
