import { FETCH_API_DATADOG } from '../actions/datadogActions';

const defaultState = {
  'services': [
    {
      'name': 'datadoghq',
      'API': 'https://status.datadoghq.com/history.json',
      'statusField': 'status',
      'components': [
        {
          'keyField': 'name',
          'keyValue': 'Alerting Engine',
          'status': ''
        },
        {
          'keyField': 'name',
          'keyValue': 'Event Pipeline',
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
        //create a copy of default state
        var updatedData = {'services': [{'components': []}]};
        updatedData.services[0].components.push(...JSON.parse(JSON.stringify(defaultState.services[0].components)));
        //for each component defined in the default state, copy fetched status
        response.data.components.forEach((responseComponent) => {
            updatedData.services[0].components.forEach((updatedComponent) => {
                //if component[keyField] === keyValue
                if(responseComponent[updatedComponent.keyField] === updatedComponent.keyValue) {
                  updatedComponent.status = (' ' + responseComponent[defaultState.services[0].statusField]).slice(1);
                }
            });
        });

        debugger;

        return {
          ...state,
          ...updatedData
        }
      })
    default:
      return defaultState
  }
}

export default rootReducer
