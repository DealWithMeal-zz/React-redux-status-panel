import { FETCH_API_DATADOG } from '../actions/datadogActions';

const defaultState = {
  'services': [
    {
      'name': 'datadoghq',
      'components': [
        {
          'name': 'Alerting Engine',
          'status': ''
        },
        {
          'name': 'Event Pipeline',
          'status': ''
        }
      ]
    }
  ]
}

const rootReducer = (state = defaultState, action) => {
  console.log('reducer received action : ' + action.type);

  switch (action.type) {
    case FETCH_API_DATADOG:
      action.payload.then(function (response) {
        var updatedComponents = response.data.components.filter(component => ['Alerting Engine', 'Event Pipeline'].includes(component.name)).map(comp => ({
          'name': comp.name,
          'status': comp.status
        }))

        debugger;

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
      })
    default:
      return defaultState
  }
}

export default rootReducer
