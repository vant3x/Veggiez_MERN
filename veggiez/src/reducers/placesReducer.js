export default function placesReducer(state = [1], action){
	switch(action.type){
	case 'LOAD_PLACES':
		return action.places
	default:
		return state;	
	}
}