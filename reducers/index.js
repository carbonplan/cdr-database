import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Fuse from 'fuse.js'

const initialState = {
  tags: ['dac', 'forests', 'mineralization', 'soil', 'ocean', 'biomass'],
  search: '',
  visibility: {},
  projects: [],
  showOne: false,
  methodsExpanded: true,
  summaryExpanded: true
}

const combinedSearch = (tags, search, fuse, projects) => {
  const visibility = {}
  const matches = fuse.search(search).map(project => project.item.id)
  projects.forEach( (project) => {
    visibility[project.id] = false
    if (!(search == '')) {
      if (((project.tags.some(t => tags.includes(t))) &&
          (matches.includes(project.id))) || (search == project.id)) {
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
    case 'EXPAND_METHODS':
      return {
        ...state,
        methodsExpanded: true
      }
    case 'COLLAPSE_METHODS':
      return {
        ...state,
        methodsExpanded: false
      }
    case 'EXPAND_SUMMARY':
      return {
        ...state,
        summaryExpanded: true
      }
    case 'COLLAPSE_SUMMARY':
      return {
        ...state,
        summaryExpanded: false
      }
    case 'SHOW_ONE':
      return {
        ...state,
        showOne: action.value
      }
    case 'ADD_TAG':
      const tagsPlus = [...state.tags.filter(tag => tag !== action.tag), action.tag]
      return {
        ...state,
        tags: tagsPlus,
        visibility: combinedSearch(tagsPlus, state.search, state.fuse, state.projects),
        showOne: false
      }
    case 'REMOVE_TAG':
      const tagsMinus = state.tags.filter(tag => tag !== action.tag)
      return {
        ...state,
        tags: tagsMinus,
        visibility: combinedSearch(tagsMinus, state.search, state.fuse, state.projects),
        showOne: false
      }
    case 'SET_TAG':
      return {
        ...state,
        tags: [action.tag],
        visibility: combinedSearch([action.tag], state.search, state.fuse, state.projects),
        showOne: false
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.value,
        visibility: combinedSearch(state.tags, action.value, state.fuse, state.projects),
        showOne: false
      }
    case 'OR_SEARCH':
      const newSearch = state.search.concat(' | ', action.value)
      return {
        ...state,
        search: newSearch,
        visibility: combinedSearch(state.tags, newSearch, state.fuse, state.projects),
        showOne: false
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