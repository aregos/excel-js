import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'fasfaf'}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  title: defaultTitle,
  openedDate: new Date().toJSON()
}

const normalize = state => {
  return {
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
  }
}

export function normalizeInitialState(state) {
  return state ? normalize(state) : defaultState
}
