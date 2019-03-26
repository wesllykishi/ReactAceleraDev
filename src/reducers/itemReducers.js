import recipes from '../sample_data/recipes.json'

const INITIAL_STATE = {
    listItems: recipes.results,
    valorBuscar:""
};

export const itemReducers = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {        
         case "CHANGE":                       
            return {...state,valorBuscar:action.payload,listItems:Filtrar(INITIAL_STATE.listItems,action.payload)};                
        default:
            return state;
    }
}

const Filtrar = (array,buscar) => {
    return array.filter(value => value.title.indexOf(buscar) > -1 || value.ingredients.indexOf(buscar) > -1 )
}
