import React from 'react'

import { SearchInput } from '../brands-component/brand-styles'
import { LeftContent } from '../sorting-component/sorting-elements'

const TagsComponent = () => {
  return (
    <div>
      <LeftContent>
        <h4>Tags</h4>
        <SearchInput type="text" name="name" placeholder="Search Tag" />
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>{' '}
        <label>
          <input type="checkbox" /> My Value
        </label>
      </LeftContent>
    </div>
  )
}

export default TagsComponent
