require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d94f8c2764cd00b912645ce', { age: 1 }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true })
    return count
}

deleteTaskAndCount('5d965b7dd7d0db2174b080e9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

