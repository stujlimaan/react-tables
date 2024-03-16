import React from 'react'
import Select from 'react-select';
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

function GenderSelect({ value, updateMyData }) {
  // console.log(value, updateMyData);
  return (
    <Select
    options={genderOptions}
    value={genderOptions.find(option => option.value === value)}
    onChange={selectedOption => updateMyData(selectedOption.value)}
  />
  )
}

export default GenderSelect
