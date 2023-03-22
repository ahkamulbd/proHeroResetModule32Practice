const users = [
    { id: 1, name: 'abul', job: 'doctor' }
]
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'habul', job: 'leader' }
    ]
}

//console.log(data.data[1].name);

const user = {
    id: 5001,
    name: 'Abul Kalam',
    address: {
        street: {
            first: '35/1 Kachukhet Road',
            second: 'Third Floor',
            Flat: 'right'
        }
    },
    postOffice: 'Cantonment',
    city: 'Dhaka'
}
const myFlat = user.address.street.second;
console.log(myFlat);