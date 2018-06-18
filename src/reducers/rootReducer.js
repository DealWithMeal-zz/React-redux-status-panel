import { DATADOG_FETCH_API } from '../actions/datadogActions';

//add new services and components here in same manner
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
        },
        {
          'name': 'Web Application',
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
      //find all components which need to be fetched under datadoghq service and select required fields
      var updatedComponents = action.response.data.components
      .filter(component => defaultState.services.find(service => service.name === 'datadoghq').components.map(component => component.name).includes(component.name))
      .map(comp => ({
        'name': comp.name,
        'status': comp.status
      }))

      //follow the default state object format
      //put changes only under current service
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
