// Promise Chaining
new Promise((resolve, reject) => {
    console.log('initial state');
    resolve();
})
    .then(() => {
        console.log('do this');
        throw new Error();
    })
    .catch(() => {
        console.log('do that');
    })
    .then(() => {
        console.log('do this, no matter what happened before');
        // throw new Error();
    })
    .then(() => {
        console.log('execute this too');
    })
    .catch(() => {
        console.log('do that, no matter what happened before');
    })
    .then(() => {
        console.log('execute this after');
    })