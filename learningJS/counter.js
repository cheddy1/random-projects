function Counter(number) {
    this.number = number
}
Counter.prototype.inc = function () {
    this.number++
}
Counter.prototype.dec = function () {
    this.number--
}
Counter.prototype.value = function () {
    return this.number
}
counter = new Counter(0)
counter.inc()
counter.dec()
console.log(counter.value())
