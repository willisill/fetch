/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch('/products', {
    method: 'POST',
    body: 'name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})



    /* ============================== Phase 2 ============================== */

    .then(response => {
        console.log('Status Code: ', response.statusCode);
        console.log('Content-Type Header: ', response.headers.get('Content-Type'));
        console.log('URL of Response: ', response.url);
    }


    )



/* ============================== Phase 3 ============================== */

const bodyData = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
});

fetch('/products', {
    method: 'POST',
    body: bodyData,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

    .then(response => {
        console.log('Status Code: ', response.statusCode);
        console.log('Content-Type Header: ', response.headers.get('Content-Type'));
        console.log('URL of Response: ', response.url);
    }


    );
