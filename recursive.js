function contador(n) {
    if (n < 1) {
        return [];
    } else {
        let contadorArray = contador(n - 1);
        contadorArray.unshift(n);
        return contadorArray;
    }
}

console.log(contador(10));

// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]