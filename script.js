/* =========================================================
ENGINEERING FORMULA HUB
MAIN JAVASCRIPT
========================================================= */

(function () {

"use strict";

/* =====================================================
   SPLASH SCREEN
   ===================================================== */

function startWebsite() {

    const splash = document.getElementById("splash-screen");
    const main = document.getElementById("main-content");

    console.log("Starting Engineering Formula Hub...");

    if (splash) {
        splash.classList.add("hide");
        splash.style.display = "none";
    }

    if (main) {
        main.classList.add("show");
        main.style.display = "block";
    }

    console.log("Website opened successfully.");

}


/* =====================================================
   START AFTER PAGE LOAD
   ===================================================== */

window.addEventListener("load", function () {

    console.log("All files loaded.");

    setTimeout(startWebsite, 2500);

});


/* =====================================================
   SHOW SECTION
   ===================================================== */

window.showSection = function (sectionId) {

    const section = document.getElementById(sectionId);

    if (!section) {
        console.warn("Section not found:", sectionId);
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

};


/* =====================================================
   BASIC MATHEMATICS
   ===================================================== */

window.openBasicMathematics = function () {

    if (
        typeof formulaDatabase === "undefined" ||
        !formulaDatabase.basicMathematics
    ) {

        alert("Basic Mathematics formulas could not be loaded.");

        return;

    }


    const formulas = formulaDatabase.basicMathematics;

    let page =
        document.getElementById("basic-mathematics-page");


    if (!page) {

        page = document.createElement("section");

        page.id = "basic-mathematics-page";

        page.style.minHeight = "100vh";
        page.style.padding = "40px 20px";
        page.style.background = "#0b0b0b";
        page.style.color = "#ffffff";


        /* HEADER */

        const header = document.createElement("div");

        header.style.maxWidth = "1100px";
        header.style.margin = "0 auto 35px";


        const back = document.createElement("button");

        back.textContent = "← Back to Maths Hub";

        back.style.padding = "12px 20px";
        back.style.border = "1px solid #ff8a00";
        back.style.background = "transparent";
        back.style.color = "#ff8a00";
        back.style.borderRadius = "8px";
        back.style.cursor = "pointer";


        back.addEventListener("click", function () {

            const maths =
                document.getElementById("maths-hub");

            if (maths) {

                maths.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });


        const title = document.createElement("h1");

        title.textContent = "Basic Mathematics";

        title.style.color = "#ff8a00";
        title.style.marginTop = "25px";


        const subtitle = document.createElement("p");

        subtitle.textContent =
            "Fundamental mathematical formulas for engineering.";

        subtitle.style.color = "#bbbbbb";


        const count = document.createElement("div");

        count.textContent =
            formulas.length + " formulas available";

        count.style.marginTop = "15px";
        count.style.color = "#ff8a00";


        header.appendChild(back);
        header.appendChild(title);
        header.appendChild(subtitle);
        header.appendChild(count);


        /* FORMULA GRID */

        const grid = document.createElement("div");

        grid.style.maxWidth = "1100px";
        grid.style.margin = "0 auto";

        grid.style.display = "grid";

        grid.style.gridTemplateColumns =
            "repeat(auto-fit, minmax(260px, 1fr))";

        grid.style.gap = "18px";


        formulas.forEach(function (formula, index) {

            const card = document.createElement("div");

            card.style.background = "#151515";
            card.style.border = "1px solid #2d2d2d";
            card.style.borderRadius = "14px";
            card.style.padding = "22px";


            const number =
                document.createElement("div");

            number.textContent =
                String(index + 1).padStart(2, "0");

            number.style.color = "#777";
            number.style.marginBottom = "10px";


            const name =
                document.createElement("h3");

            name.textContent = formula.name;

            name.style.color = "#ffffff";


            const expression =
                document.createElement("div");

            expression.textContent =
                formula.formula;

            expression.style.marginTop = "15px";
            expression.style.padding = "14px";
            expression.style.background = "#0d0d0d";
            expression.style.color = "#ff8a00";
            expression.style.borderRadius = "8px";
            expression.style.fontSize = "20px";


            card.appendChild(number);
            card.appendChild(name);
            card.appendChild(expression);

            grid.appendChild(card);

        });


        page.appendChild(header);
        page.appendChild(grid);


        const mathsHub =
            document.getElementById("maths-hub");


        if (mathsHub) {

            mathsHub.parentNode.insertBefore(
                page,
                mathsHub.nextSibling
            );

        }

    }


    page.style.display = "block";

    page.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

};


/* =====================================================
   DOM READY
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM ready.");

    /* BASIC MATH CARD */

    const mathsHub =
        document.getElementById("maths-hub");


    if (mathsHub) {

        const cards =
            mathsHub.querySelectorAll(".formula-category");


        cards.forEach(function (card) {

            const heading =
                card.querySelector("h3");


            if (!heading) return;


            if (
                heading.textContent
                    .trim()
                    .toLowerCase()
                    .includes("basic mathematics")
            ) {

                card.style.cursor = "pointer";

                card.addEventListener(
                    "click",
                    window.openBasicMathematics
                );

            }

        });

    }


    /* SEARCH */

    const searchInput =
        document.getElementById("formula-search");

    const searchButton =
        document.getElementById("search-btn");


    function performSearch() {

        if (!searchInput) return;


        const query =
            searchInput.value.trim();


        if (!query) return;


        if (
            typeof searchFormulaDatabase === "function"
        ) {

            const results =
                searchFormulaDatabase(query);


            console.log(
                "Search results:",
                results
            );


            if (results.length === 0) {

                alert(
                    "No formula found for: " + query
                );

                return;

            }


            const basicResult =
                results.find(function (formula) {

                    return (
                        formulaDatabase.basicMathematics &&
                        formulaDatabase.basicMathematics.some(
                            function (item) {
                                return item.id === formula.id;
                            }
                        )
                    );

                });


            if (basicResult) {

                window.openBasicMathematics();

            }

        }

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    performSearch();
                }

            }
        );

    }


    /* BACK TO TOP */

    const backToTop =
        document.getElementById("back-to-top");


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* "/" SEARCH SHORTCUT */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "/" &&
                document.activeElement !== searchInput
            ) {

                event.preventDefault();

                if (searchInput) {
                    searchInput.focus();
                }

            }

        }
    );


    console.log(
        "Engineering Formula Hub JavaScript loaded."
    );

});

})();
