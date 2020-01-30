import React, { FunctionComponent, useState } from 'react';

interface SpecificDropDownOption {
  text: string;
  esriUnit: string;
}

const MeasureContent: FunctionComponent = () => {
  const [renderDistanceOption, setDistanceOption] = useState(false);
  const [renderAreaOption, setAreaOption] = useState(false);
  const [renderLatLongOption, setLatLongOption] = useState(false);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [selectedDropDownOption, setSelectedDropDownOption] = useState('');

  const returnDropdownOptions = (): JSX.Element[] => {
    return dropDownOptions.map(
      (lengthUnit: SpecificDropDownOption, index: number) => {
        const { text, esriUnit } = lengthUnit;

        return (
          <>
            <option value={esriUnit} key={index}>
              {text}
            </option>
          </>
        );
      }
    );
  };

  return (
    <div className="measure-options-container">
      <div className="buttons-select-wrapper">
        <button
          onClick={(): void => setAreaOption(!renderAreaOption)}
          className="esri-icon-measure-area"
        />
        <button
          onClick={(): void => setDistanceOption(!renderDistanceOption)}
          className="esri-icon-measure"
        />
        <button
          onClick={(): void => setLatLongOption(!renderLatLongOption)}
          className="esri-icon-maps"
        />
        <span>|</span>
        <select
          onBlur={(e): void => setSelectedDropDownOption(e.target.value)}
          disabled={dropDownOptions.length ? false : true}
        >
          {dropDownOptions.length === 0 && (
            <option defaultValue="Unit">Unit</option>
          )}
          {returnDropdownOptions()}
        </select>
      </div>
      <p>Measurement Result</p>
      <hr />
    </div>
  );
};

export default MeasureContent;
