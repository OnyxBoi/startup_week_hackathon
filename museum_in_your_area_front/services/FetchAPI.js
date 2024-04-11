import axios from 'axios'
import { HOST } from '../GLOBAL_VALUES'

export async function fetchMuseums(selectedFilters, url = `http://${HOST}/api/v1/museums/filter?pageId=1&itemsPerPage=15`) {


  const filtersActivated = selectedFilters.some((filter) => filter.length > 0)
  if(!(url.includes("cityId") || url.includes("departmentId") || url.includes("regionId") || url.includes("themeId"))){
      if (filtersActivated) {
      url += '&'
      const filterTypes = ['cityId', 'departmentId', 'regionId', 'themeId']
      let isFirstFilter = true

      filterTypes.forEach((type, typeIndex) => {
        if (selectedFilters[typeIndex].length > 0) {
          if (!isFirstFilter) url += '&'
          isFirstFilter = false
          url += `${type}=`
          selectedFilters[typeIndex].forEach((item, filterIndex) => {
            url += item.id
            if (filterIndex !== selectedFilters[typeIndex].length - 1) url += ','
          })
        }
      })
    }
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
  let url = `http://${HOST}/api/v1/cities`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchRegions() {
  let url = `http://${HOST}/api/v1/regions`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchDepartments() {
  let url = `http://${HOST}/api/v1/departments`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchThemes() {
  let url = `http://${HOST}/api/v1/themes`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}


export async function fetchRandom() {
  let url = `http://${HOST}/api/v1/museums/random`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}

export async function fetchMuseumsMaps(userLocalisation) {
  let url = `http://${HOST}/api/v1/maps`

  try {
    const response = await axios.post(url, userLocalisation)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    throw error
  }
}
