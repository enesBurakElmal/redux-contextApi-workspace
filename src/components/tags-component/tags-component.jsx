import React, { useContext } from 'react'

import { CartContext } from '../../contexts/cart-item.context'

import { LeftContent } from '../sorting-component/sorting-elements'
import SearchBox from '../search-box/search-box.component'

import styles from './tags.module.scss'

const TagsComponent = () => {
  const { tagFilter, setTagField, productsTags, products } =
    useContext(CartContext)

  const sameNameCount = (name) => {
    const count = products.filter((item) => item.tags.includes(name))
    return count.length
  }

  const productsTagCount = (products) => {
    const tagCount = products.map((item) => item.tags)
    const tagCountFlat = tagCount.flat()
    const uniqueTags = [...new Set(tagCountFlat)]
    return uniqueTags
  }

  const handleTagFilter = (e) => {
    tagFilter(e.target.value)
    setTagField(e.target.value)
  }

  return (
    <div className={styles.tagsContainer}>
      <h4>Tags</h4>
      <SearchBox
        type="text"
        name="name"
        placeholder="Search Tag"
        searchChange={handleTagFilter}
      />
      <div className={styles.tags}>
        <label>
          <input type="checkbox" /> All{' '}
          <span className={styles.nameCount}>
            ({productsTagCount(products).length})
          </span>
        </label>
        {productsTags.map((tag, index) => (
          <label key={index}>
            <input type="checkbox" /> {tag}
            <span className={styles.nameCount}> ({sameNameCount(tag)})</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default TagsComponent
