import { createContext, useState, useEffect } from 'react'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = () => {
      const categoriesMap = {}
      categoriesMap['testCategories'] = 'all'

      return categoriesMap
    }

    setCategoriesMap(getCategoriesMap())
  }, [])

  console.log('categoriesMap', categoriesMap)

  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
