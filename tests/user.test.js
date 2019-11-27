const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Shea',
        email: 'shea@example.com',
        password: 'MyPass777!'
    }).expect(201)
})

test('should log in existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not log in non existant user', async () => {
    await request(app).post('/users/login').send({
        email: 'random@email.com',
        password: 'randomPassword'
    }).expect(400)
})

