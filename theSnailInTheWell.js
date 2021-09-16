function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    let days = 0;
    let feet = 0;
    let distance = 32;
    while (feet <= distance) {
        days++;
        if (feet >= 32) {
            feet += 7;
            console.log(`days:${days} feet:${feet} distance:${distance}`);
        }

        if (feet >= 31) {
            feet -=2;
            console.log(`days:${days} feet:${feet} distance:${distance}`);
        }
    }

    
}
