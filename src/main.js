

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
    total: 5000,
};
//invoice.client.name ='Paul',
//invoice.client = 'Hugo Rojas';
invoice.total = 15000;
console.log(invoice);