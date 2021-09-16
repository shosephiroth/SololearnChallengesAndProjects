function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);

    //create a function, take 2 parameters
    function convert(amount, rate) {
        return amount * rate;
    }
    
    console.log(convert(amount, rate));
}
