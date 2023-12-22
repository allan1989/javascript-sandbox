const URL1 = 'https://jsonplaceholder.typicode.com/users/1';
const URL2 = 'https://jsonplaceholder.typicode.com/todos/1';
const URL3 = 'https://jsonplaceholder.typicode.com/comments/1';

const p1 = fetch(URL1);
const p2 = fetch(URL2);
const p3 = fetch(URL3);

// retourne un tableau contenant la réponse de toutes les promesses acquittées et tenues
// en cas d'erreur, retourne cette erreur immédiatement sans les autres résultats
// Promise.all([p1, p2, p3])
//         .then(console.log)
//         .catch(err => console.log(err))


// retourne un tableau d'objets contentant la réponse de toutes les promesses acquittées (tenues ou rompues)
// en cas d'erreut, retourne cette erreur en plus des autres réponses
// Promise.allSettled([p1, p2, p3])
//         .then(console.log)
//         .catch(err => console.log(err))


// retourne la réponse de la première promesse acquitée (tenue ou rompue)
// en cas d'erreur, retourne cette erreur immédiatement, sans les autres réponses
// Promise.race([p1, p2, p3])
//         .then(console.log)
//         .catch(console.log)


// retourne la réponse de la première promesse acquitée et tenue
// en cas d'erreur, retourne une erreur AggregateError: No Promise in Promise.any was resolved
// Promise.any([p1, p2, p3])
//         .then(console.log)
//         .catch(err => console.log(err.errors))



// retourne toujours une promesse
console.log('before getData');
async function getData() {
    try {
        console.log('getData init')
        const res = await p1;
        const resJSON = await res.json();
        console.log(resJSON);
        const res2 = await p2;
        const resJSON2 = await res2.json();
        console.log(resJSON2);
    }
    catch(err) {
        console.error(err)
    }
}

getData();
console.log('after getData')