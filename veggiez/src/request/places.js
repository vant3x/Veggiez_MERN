import config from '../config/secrets';
function getPlaces(){
    return fetch(config.url+"/places").then(data => {
       return data.json();
    }).catch(console.log)
}
function getPlace(slug){
    return fetch(config.url+"/places/"+slug).then(data => {
        return data.json();
    }).catch(console.log)
}

function createPlace(data, jwt){
    let formData = new FormData();

    for(let field in data){
        formData.append(field,data[field])
    }

    return fetch(config.url+"/places",{
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ jwt 
        }
    }).then(dataRemote => {
        return dataRemote.json();
    })
}

export {getPlaces, getPlace, createPlace};

export default   {
    places: [
        {
            imageUrl: '/images/veggiez3.jpeg',
            title: 'Verdeo',
            description: 'Un lugar lleno de sábores deliociosos y únicos para los amantes de la comida vegetariana.',
            address: 'Calle #12 43 D 77'
        },
        {
            imageUrl: '/images/veggiez4.jpeg',
            title: 'Vegarden',
            description: 'Un lugar lleno de sábores deliociosos y únicos para los amantes de la comida vegetariana.',
            address: ' Cl. 32b #81-41'
        },
        {
            imageUrl: '/images/veggiez.jpg',
            title: 'La Provincia',
            description: 'Un lugar lleno de sábores deliociosos y únicos para los amantes de la comida vegetariana.',
            address: 'Cra 42 #453'
        }
    ]
}