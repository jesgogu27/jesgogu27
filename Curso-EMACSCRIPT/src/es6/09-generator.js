function* iterator(array) {
    for (let item of array) {
        yield item;
    }
}

const it = iterator(["Libro", "Cuaderno", "libreta", "Cartilla"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

export function* getId() {
    // Tu código aquí 👈
    let iD = Math.random().toString(32);

    yield iD;
}

const ip = getId();
console.log(ip.next().value);
