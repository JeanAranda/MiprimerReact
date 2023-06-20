

const invoice = {
    id: 10,
    name: 'Compras de oficina de Secretaría Técnica',
    date: new Date(),
    client: {
        id: 50,
        name: 'Estephanie',
        lastName: 'Nuñez',
        age: 34,
    },
    items: [
        {
            producto: 'Keyboard',
            price: 399,
            quantity: 2,
        },
        {
            producto: 'mouse',
            price: 200,
            quantity: 1,
        },
        {
            producto: 'paper',
            price: 100,
            quantity: 10,
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total +item.price*item.quantity;
        });
        return total;
    },
    greeting: function () {
        return `Hola ${this.client.name} tu pedido se encuentra en camino`
    }
};
//invoice.client.name ='Paul',
//invoice.client = 'Hugo Rojas';
//invoice.total = 15000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
console.log('Total: '+invoice.total());