use async when you call the function that is dealing with promise (or resolve or reject is being called)

consider this code snippet

```

async function returnPromiseResponse(number){

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(number)
        } , 2000);
    });

    const result = await promise;

    return result * 2;

}

async function main() {
    const result = await returnPromiseResponse(5);

    const finalOutput = new Promise((res,rej) => {
        setTimeout(() => {
            res(result * result)
        })
    } , 2000)

    const result2 = await finalOutput

    return result2;
}

const wrappedFunction = async () => {

    const result = await main();

    console.log("Final Result:", result);

}

wrappedFunction();
```

we used await when we called returnPromiseResponse function
becuase Promise is resolving (res is being called) in the returnPromiseResponse function


-----


where should we call .then method
in http service ??

NO , just return promise from there
and in component file where we actually need value , call the .then method there

or use async/await in service
and get absolute value from there
and call the service method with await in component file
and get the exact value
