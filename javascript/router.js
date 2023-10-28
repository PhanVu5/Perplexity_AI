let path = "/";
// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     console.log(event.target.nodeName);
//     handleLocation();
// };

const routes = {
    404: "./pages/404.html",
    "/": "./pages/index.html",
    "/chatAI": "./pages/chatAI.html",
    "/Discover": "./pages/Discover.html",
    "/Thread": "./pages/chatAI.html",
};

const handleLocation = async (path) => {
    // path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes['/'] || routes[404];
    // console.log('route', routes[path]);
    const html = await fetch(route)
                .then(data =>{
                    if (!data.ok) {
                        throw new Error('Network response was not ok');
                    }
                     return data.text();
                    })
                .catch((error) => {
                    console.error('Error at router.js', error);
                })
    document.getElementById("main-page").innerHTML = html;
}

// window.onpopstate = handleLocation;
// window.route = route;

handleLocation("/");
