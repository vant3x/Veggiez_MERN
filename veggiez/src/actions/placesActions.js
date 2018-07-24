import * as request from '../request/places';

export function loadPlaces(places){
	return { type: 'LOAD_PLACES', places };
}

export function loadAll(){
	return (dispatch,getState) => {
		request.getPlaces().then(result => {
			console.log(result);
			dispatch(loadPlaces(result.docs));
		})
	}
}
