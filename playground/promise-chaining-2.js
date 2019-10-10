require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d94f8c2764cd00b912645ce', { age: 1 }).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
