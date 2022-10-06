var value = "1663925460000"
console.log("VAL", value)
var date = new Date(parseInt(value))
var h = setInterval(dateDiff(date.getTime()), 1000)