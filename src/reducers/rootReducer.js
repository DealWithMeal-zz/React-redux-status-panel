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
    },
    {}
  ]
}

const rootReducer = (state = defaultState, action) => {
  console.log('reducer received action : ' + action.type);

  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ...state,
        ...action.response
      }
    default:
      return defaultState
  }
}

export default rootReducer
