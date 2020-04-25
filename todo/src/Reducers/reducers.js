export const userList = {
    todo: [
  {
    what: "Finish Ocarina of Time",
    id: 1,
    finished: false
  },
  {
    what: "Gain 15 Pounds",
    id: 2,
    finished: false
  },
  {
    what: "Eat Some Wings",
    id: 3,
    finished: false
  },
  {
    what: "Clean the Office",
    id: 4,
    finished: false
  }
]}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
          console.log("action.payload",action)
        return {
            ...state,
            todo: [...state.todo,
                {
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
    }
  };