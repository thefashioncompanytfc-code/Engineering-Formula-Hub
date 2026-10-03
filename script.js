/* =========================================
   ENGINEERING FORMULA HUB
   script.js
   Created by Rihan
========================================= */


/* =========================================
   PAGE LOADING
========================================= */

window.addEventListener("load", function () {

    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    /*
        Splash screen stays for 6 seconds.
        After that, main website appears.
    */

    setTimeout(function () {

        if (splashScreen) {
            splashScreen.classList.add("hide");
        }

        if (mainContent) {
            mainContent.classList.add("show");
        }

    }, 6000);

});


/* =========================================
   SECTION NAVIGATION
========================================= */

function showSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (!section) {
        console.warn("Section not found:", sectionId);
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   SEARCH SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("formula-search");
    const searchButton = document.getElementById("search-btn");

    if (!searchInput || !searchButton) {
        return;
    }


    function performSearch() {

        const searchText = searchInput.value
            .trim()
            .toLowerCase();

        /*
            If search box is empty,
            return everything to normal.
        */

        if (searchText === "") {

            clearSearch();

            return;
        }


        /*
            Search through formula categories
            and individual sub-items.
        */

        const categories =
            document.querySelectorAll(".formula-category");

        let foundSomething = false;


        categories.forEach(function (category) {

            const categoryText =
                category.innerText.toLowerCase();

            const matches =
                categoryText.includes(searchText);


            if (matches) {

                category.style.display = "";

                foundSomething = true;

            } else {

                category.style.display = "none";

            }

        });


        /*
            Search hub cards as well.
        */

        const hubCards =
            document.querySelectorAll(".hub-card");

        hubCards.forEach(function (card) {

            const cardText =
                card.innerText.toLowerCase();

            if (cardText.includes(searchText)) {

                card.style.display = "";

                foundSomething = true;

            } else {

                card.style.display = "none";

            }

        });


        /*
            Scroll to first result.
        */

        if (foundSomething) {

            const firstResult =
                document.querySelector(
                    ".formula-category[style='display: block'], .formula-category:not([style*='display: none'])"
                );

            if (firstResult) {

                firstResult.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        } else {

            showNoResults();

        }

    }


    /* -----------------------------------------
       SEARCH BUTTON
    ----------------------------------------- */

    searchButton.addEventListener(
        "click",
        performSearch
    );


    /* -----------------------------------------
       ENTER KEY SEARCH
    ----------------------------------------- */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch();

            }

        }
    );


    /* -----------------------------------------
       LIVE SEARCH
    ----------------------------------------- */

    searchInput.addEventListener(
        "input",
        function () {

            if (searchInput.value.trim() === "") {

                clearSearch();

            }

        }
    );

});


/* =========================================
   CLEAR SEARCH
========================================= */

function clearSearch() {

    const categories =
        document.querySelectorAll(".formula-category");

    categories.forEach(function (category) {

        category.style.display = "";

    });


    const hubCards =
        document.querySelectorAll(".hub-card");

    hubCards.forEach(function (card) {

        card.style.display = "";

    });


    removeNoResultsMessage();
}


/* =========================================
   NO RESULTS MESSAGE
========================================= */

function showNoResults() {

    removeNoResultsMessage();


    const message =
        document.createElement("div");

    message.id = "no-results-message";

    message.style.textAlign = "center";
    message.style.padding = "30px";
    message.style.margin = "20px auto";
    message.style.maxWidth = "600px";

    message.innerHTML = `
        <h3 style="color:#ff9800;">
            No formula found
        </h3>

        <p style="color:#858d96;">
            Try searching with another formula name,
            topic or keyword.
        </p>
    `;


    const mathsHub =
        document.getElementById("maths-hub");

    if (mathsHub) {

        mathsHub.appendChild(message);

    }

}


/* =========================================
   REMOVE NO RESULTS MESSAGE
========================================= */

function removeNoResultsMessage() {

    const message =
        document.getElementById(
            "no-results-message"
        );

    if (message) {

        message.remove();

    }

}


/* =========================================
   HUB CARD CLICK SUPPORT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hubCards =
        document.querySelectorAll(".hub-card");


    hubCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const target =
                    card.getAttribute("data-target");

                if (target) {

                    showSection(target);

                }

            }
        );

    });

});


/* =========================================
   FORMULA ITEM CLICK SUPPORT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const subItems =
        document.querySelectorAll(".sub-item");


    subItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                /*
                    Formula-detail system will be
                    connected later through formulas.js.
                */

                const formulaName =
                    item.innerText.trim();

                console.log(
                    "Formula selected:",
                    formulaName
                );

            }
        );

    });

});


/* =========================================
   BACK TO TOP
========================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
            "/" focuses the search box.
        */

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            const searchInput =
                document.getElementById(
                    "formula-search"
                );

            if (searchInput) {

                searchInput.focus();

            }

        }

    }
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Engineering Formula Hub loaded successfully."
);

console.log(
    "Created by Rihan"
);
