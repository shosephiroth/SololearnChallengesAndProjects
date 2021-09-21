function contact(name, number) {
    this.name = name;
    this.number = number;

    this.print = () => {
        let contactId = `${this.name}:${this.number}`;
        console.log(contactId);
    }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();
