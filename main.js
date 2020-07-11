let host = window.location.host;

setTimeout(() => {
    if (host === "4pda.ru") {
        let links = document.querySelectorAll('a');
        links.forEach(el => {
            if (el.href.match("/forum/dl/post/"))
                el.href = el.href.replace("https://4pda.ru/", "//d4pda.ru/");
        })
    }
}, 1000)
