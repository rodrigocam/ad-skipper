window.setInterval(search_button, 1000);

function search_button() {
    let button = document.querySelector(".ytp-ad-skip-button");
    let static = document.querySelector(".ytp-ad-overlay-close-button");
    
    if(button) {
        console.log("skipping ad");
        button.click();
    }

    if(static) {
        console.log("skipping ad");
        static.click();
    }
}

