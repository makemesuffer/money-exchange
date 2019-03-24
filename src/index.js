// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency >= 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    const values = [{value: 50, name: 'H'},
        {value: 25, name: 'Q'},
        {value: 10, name: 'D'},
        {value: 5, name: 'N'},
        {value: 1, name: 'P'}];

    let money = {};

    values.forEach(function (e) {
        let value;
        if ((value = Math.floor(currency / e.value)) > 0) {
            money[e.name] = value;
            currency = Math.floor(currency % e.value);
        }

    });

    return money;
};
