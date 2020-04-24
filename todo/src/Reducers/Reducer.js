

export const reducerList = { todo: [
    {
        item: 'Clean the Office',
        finished: false,
        id: 1
    },
    {
        item: 'Get a Haircut',
        finished: false,
        id: 2
    },
    {
        item: 'Play with the Dog',
        finished: false,
        id: 3
    },
    {
        item: 'Beat Ocarina of Time',
        finished: false,
        id: 4
    },
    {
        item: 'Play the Guitar',
        finished: false,
        id: 5
    }
]}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
            todo: [...state.todo, {
                what:action.payload,
                id: Date.now(),
                finished: false
            }
        ]
    }
    
    case 'CLEAR_ALL':
          return{
              ...state,
              todo: state.todo.filter(item => !item.finished)
          }
      case 'TOGGLE_IT':
           return{
                ...state,
               todo: state.todo.map(item =>{
                   if(action.payload === item.id){
                       return{
                           ...item,
                           finished: !item.finished
                       }
                   }
                   return{
                           ...item
                         }
               })
             }

      default:
        return state;
    }}; 