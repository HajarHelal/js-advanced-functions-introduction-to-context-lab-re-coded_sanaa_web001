// Your code here
function createEmployeeRecord(row){
  return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
 function createEmployeeRecords(employeeData){
   return employeeData.map(function(row){
         return createEmployeeRecord(row)
     })
 }
function createTimeInEvent(employee, dateStamp){
      let [date, hour] = dateStamp.split(' ')

      employee.timeInEvents.push({
          type: "TimeIn",
          hour: parseInt(hour, 10),
          date,
      })

      return employee
  }
function createTimeOutEvent(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

   employee.timeOutEvents.push({
       type: "TimeOut",
       hour: parseInt(hour, 10),
       date,
   })

   return employee
}

<<<<<<< HEAD
function hoursWorkedOnDate(employee, soughtDate){
=======
let hoursWorkedOnDate = function(employee, soughtDate){
>>>>>>> 667f090373f464f329fb565d2b608d7ec5afbab6
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })
    let outEvent = employee.timeOutEvents.find(function(e){
     return e.date === soughtDate
 })

 return (outEvent.hour - inEvent.hour) / 100
}
<<<<<<< HEAD

 function wagesEarnedOnDate(employee, dateSought){
=======
let wagesEarnedOnDate = function(employee, dateSought){
>>>>>>> 667f090373f464f329fb565d2b608d7ec5afbab6
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}
<<<<<<< HEAD

 function allWagesFor(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

let payable = eligibleDates.reduce(function(memo, d){
    return memo + wagesEarnedOnDate(employee, d)
}, 0)

return payable
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}
=======
let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })
>>>>>>> 667f090373f464f329fb565d2b608d7ec5afbab6
