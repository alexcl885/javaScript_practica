function acronimo(cadena) {
    return cadena.split(' ').map(word => word[0].toUpperCase()).join()
}

console.log(`ACRONIMO=  ${acronimo("Me llamo Miguelon")}`);
