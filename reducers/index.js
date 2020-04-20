import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Fuse from 'fuse.js'

const initialState = {
  tags: ['dac', 'forests', 'mineralization', 'soil', 'ocean', 'biomass'],
  search: '',
  visibility: {},
  projects: []
}

const combinedSearch = (tags, search, fuse, projects) => {
  const visibility = {}
  const matches = fuse.search(search).map(project => project.item.id)
  projects.forEach( (project) => {
    visibility[project.id] = false
    if (!(search == '')) {
      if ((project.tags.some(t => tags.includes(t))) &&
          (matches.includes(project.id))) {
        visibility[project.id] = true
      }
    } else {
      if (project.tags.some(t => tags.includes(t))) {
        visibility[project.id] = true
      }
    }
  })
  return visibility
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case 'ADD_TAG':
      const tagsPlus = [...state.tags.filter(tag => tag !== action.tag), action.tag]
      return {
        ...state,
        tags: tagsPlus,
        visibility: combinedSearch(tagsPlus, state.search, state.fuse, state.projects)
      }
    case 'REMOVE_TAG':
      const tagsMinus = state.tags.filter(tag => tag !== action.tag)
      return {
        ...state,
        tags: tagsMinus,
        visibility: combinedSearch(tagsMinus, state.search, state.fuse, state.projects)
      }
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.value,
        visibility: combinedSearch(action.value, state.search, state.fuse, state.projects)
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.value,
        visibility: combinedSearch(state.tags, action.value, state.fuse, state.projects)
      }
    case 'OR_SEARCH':
      const new_search = state.search.concat(' | ', action.value)
      return {
        ...state,
        search: new_search,
        visibility: combinedSearch(state.tags, new_search, state.fuse, state.projects)
      }
    case 'INIT_PROJECTS':
      return {
        ...state,
        projects: action.value
      }
    case 'INIT_VISIBILITY':
      const obj = {}
      state.projects.forEach( (project) =>
        obj[project.id] = true
      )
      return {
        ...state,
        visibility: obj
      }
    case 'INIT_FUSE':
      const options = {
        keys: ['name'],
        threshold: 0.1,
        useExtendedSearch: true
      }
      return {
        ...state,
        fuse: new Fuse(state.projects, options)
      }
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}