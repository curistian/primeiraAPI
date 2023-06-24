const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * 0 * * 6', function () {
    console.log("executando tarefa 1!", new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("cancelando tarefa 1")
}, 10000)   

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 0
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
        console.log("executando tarefa2", new Date().getSeconds())
    })