import React from 'react'

import { LeftContent, RadioContent } from './sorting-elements'

const SortingComponent = () => {
  const [favorite, setFavorite] = React.useState('lowToHigh')
  //   const [lowToHigh, setLowToHigh] = React.useState(false)
  //   const [highToLow, setHighToLow] = React.useState(false)

  const handleLowToHigh = () => {
    setFavorite('lowToHigh')
  }

  const handleHighToLow = () => {
    setFavorite('highToLow')
  }

  const handleNewToOld = () => {
    setFavorite('newToOld')
  }

  const handleOldToNew = () => {
    setFavorite('oldToNew')
  }

  const RadioButton = ({ label, value, onChange }) => {
    return (
      <RadioContent>
        <label>
          <input type="radio" checked={value} onChange={onChange} />
          {label}
        </label>
      </RadioContent>
    )
  }

  return (
    <div>
      <h4> Sorting</h4>{' '}
      <LeftContent>
        <RadioButton
          label="Price low to high"
          value={favorite === 'lowToHigh'}
          onChange={handleLowToHigh}
        />
        <RadioButton
          label="Price high to low"
          value={favorite === 'highToLow'}
          onChange={handleHighToLow}
        />
        <RadioButton
          label="New to old"
          value={favorite === 'newToOld'}
          onChange={handleNewToOld}
        />
        <RadioButton
          label="Old to new"
          value={favorite === 'oldToNew'}
          onChange={handleOldToNew}
        />
        {/* <RadioButton label="Old to new" value={value} onChange={handleChange} /> */}
      </LeftContent>
    </div>
  )
}

export default SortingComponent
