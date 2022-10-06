const uuid = require('uuid');

const userDB = [{

    id: uuid.v4(),
    first_name: 'Luis',
    last_name: 'Herrera',
    email: 'ebratimo23@gmail.com',
    password: '123456',
    birthday: '2000/05/05'
},{

    id: uuid.v4(),
    first_name: 'Daniel',
    last_name: 'Yendes',
    email: 'danielyendes@gmail.com',
    password: '123rrty',
    birthday: '1998/05/30'
}
]

const getAllUsers = () => {
    return userDB
}

const getUsersById = (id) => {
    const data = userDB.find(task => task.id === id)
    return data
}

const createUsers = (title) => {
    const newUsers ={
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    userDB.push(newUsers)
    return newUsers
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers
}
