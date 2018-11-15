

export interface MainState {
  test: number
}

export const PREFIX = 'main'

export const initState: MainState = {
  test: null
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
  }
}
