import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';

// actions.js
export const activateGeod = geod => ({
    
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = name => ({
  type: 'CLOSE_GEOD',
    name,
});

export const submitValue= item =>({
    
    type: 'ADD_ITEM',
    item,
    
    
})







// reducers.js
export const geod = (state = {}, action) => {
     console.log('test1',action.geod)
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return action.name;
    default:
      return state;
  }
};




export const item = (state={},action) =>{
     console.log('item list',action.item)
        switch (action.type){
        case 'ADD_ITEM':
            return action.item;
            default :
            return state;
                      }
    
        
};





export const reducers = combineReducers({
  geod,
  item,            
            
});






// store.js
export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
  return store;
};

export const store = configureStore();
