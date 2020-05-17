import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  tags: ['dac', 'forests', 'mineralization', 'soil', 'ocean', 'biomass'],
  search: '',
  visibility: {},
  projects: [],
  showOne: false,
  methodsExpanded: true,
  summaryExpanded: true
}

const combinedSearch = (tags, search, projects) => {
  const visibility = {}
  const matches = projects.filter(project => 
    project.name.trim().toLowerCase().includes(search.trim().toLowerCase())
  ).map(project => project.id)
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
        visibility: combinedSearch(tagsPlus, state.search, state.projects),
        showOne: false
      }
    case 'REMOVE_TAG':
      const tagsMinus = state.tags.filter(tag => tag !== action.tag)
      return {
        ...state,
        tags: tagsMinus,
        visibility: combinedSearch(tagsMinus, state.search, state.projects),
        showOne: false
      }
    case 'SET_TAG':
      return {
        ...state,
        tags: [action.tag],
        visibility: combinedSearch([action.tag], state.search, state.projects),
        showOne: false
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.value,
        visibility: combinedSearch(state.tags, action.value, state.projects),
        showOne: false
      }
    case 'OR_SEARCH':
      const newSearch = state.search.concat(' | ', action.value)
      return {
        ...state,
        search: newSearch,
        visibility: combinedSearch(state.tags, newSearch, state.projects),
        showOne: false
      }
    case 'SET_ACTIVE_LIST':
      const vis_active_list = {}
      state.projects.forEach((project) =>
        vis_active_list[project.id] = action.value.includes(project.id)
      )
      return {
        ...state,
        visibility: vis_active_list
      }
    case 'SET_ACTIVE':
      const vis_active_one = Object.assign({}, state.visibility)
      state.projects.forEach((project) =>
        vis_active_one[project.id] = (project.id === action.value)
      )
      return {
        ...state,
        visibility: vis_active_one
      }
    case 'TOGGLE_ACTIVE':
      const toggle_active = Object.assign({}, state.visibility)
      toggle_active[action.value] = !toggle_active[action.value]
      return {
        ...state,
        visibility: toggle_active
      }
    case 'CLICK_OFF':
      return {
        ...state,
        visibility: combinedSearch(state.tags, state.search, state.projects),
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
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}