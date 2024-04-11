import axios from 'axios'

export async function fetchMuseums(selectedFilters) {
  let url = 'http://localhost:3000/api/v1/museums/filter'

  const filtersActivated = selectedFilters.some((filter) => filter.length > 0)

  if (filtersActivated) {
    url += '?'
    const filterTypes = ['cityId', 'departmentId', 'regionId', 'themeId']
    let isFirstFilter = true

    filterTypes.forEach((type, typeIndex) => {
      if (selectedFilters[typeIndex].length > 0) {
        if (!isFirstFilter) url += '&'
        isFirstFilter = false
        url += `${type}=`
        selectedFilters[typeIndex].forEach((item, filterIndex) => {
          url += item
          console.log(Object.call(item))
          if (filterIndex !== selectedFilters[typeIndex].length - 1) url += ','
        })
      }
    })
  }

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchCities() {
  let url = 'http://localhost:3000/api/v1/cities'

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchRegions() {
  let url = 'http://localhost:3000/api/v1/regions'

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchDepartments() {
  let url = 'http://localhost:3000/api/v1/departments'

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchThemes() {
  let url = 'http://localhost:3000/api/v1/themes'

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}
