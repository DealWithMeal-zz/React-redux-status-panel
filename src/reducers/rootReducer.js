import { DATADOG_FETCH_API } from '../actions/datadogActions';

const defaultState = {
  'services': [
    {
      'name': 'datadoghq',
      'components': [
        {
          'name': 'Alerting Engine',
          'status': 'fetching'
        },
        {
          'name': 'Event Pipeline',
          'status': 'fetching'
        }
      ]
    }
  ]
}

const rootReducer = (state = defaultState, action) => {
  console.log('reducer received action : ' + action.type);

  switch (action.type) {
    case DATADOG_FETCH_API:
      var updatedComponents = action.response.data.components.filter(component => ['Alerting Engine', 'Event Pipeline'].includes(component.name)).map(comp => ({
        'name': comp.name,
        'status': comp.status
      }))

      return {
        ...state,
        'services': [
          {
            name: 'datadoghq',
            components: [
              ...updatedComponents
            ]
          }
        ]
      }
    default:
      return defaultState
  }
}

export default rootReducer
