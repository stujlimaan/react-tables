import React from 'react'
import Select from 'react-select';
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

function GenderSelect({ value, onChange }) {
  return (
    <Select
    options={genderOptions}
    value={genderOptions.find(option => option.value === value)}
    onChange={selectedOption => onChange(selectedOption.value)}
  />
  )
}

export default GenderSelect
