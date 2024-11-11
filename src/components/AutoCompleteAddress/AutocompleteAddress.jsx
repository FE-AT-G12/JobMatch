import React from 'react'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from '@geoapify/react-geocoder-autocomplete'

const AutocompleteAddress = ({ form }) => {
  function onPlaceSelect(value) {
    console.log({ value })
    if (value) {
      form.setFieldValue('location', {
        location: value.properties.formatted,
        cityAddress: value.properties.city,
      })
    }
  }
  const location = form.getFieldValue('location')
  return (
    <GeoapifyContext apiKey='01149c7bc01c474d8a5294514c110e5b'>
      {/* Your Geoapify Geocoder Autocomplete components go here */}
      <GeoapifyGeocoderAutocomplete
        placeholder='Nhập địa điểm công việc'
        placeSelect={onPlaceSelect}
        countryCodes={'vn'}
        lang='vi'
        value={location?.location || location}
      />
    </GeoapifyContext>
  )
}

export default AutocompleteAddress
