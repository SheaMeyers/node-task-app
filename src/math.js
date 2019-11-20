const calculateTip = (total, tipPercentage = 0.25) => total + (total * tipPercentage)

module.exports = {
    calculateTip
}