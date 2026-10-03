/* =========================================================
   ENGINEERING FORMULA HUB
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       1. SPLASH SCREEN
       ----------------------------------------------------- */

    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    setTimeout(function () {
        if (splashScreen) {
            splashScreen.classList.add("hide");
        }

        if (mainContent) {
            mainContent.classList.add("show");
        }
    }, 6000);


    /* -----------------------------------------------------
       2. FORMULA DATABASE CHECK
       ----------------------------------------------------- */

    if (typeof formulaDatabase !== "undefined") {
        console.log("Formula database connected successfully.");
        console.log(
            "Total formulas:",
            typeof getTotalFormulaCount === "function"
                ? getTotalFormulaCount()
                : "Unknown"
        );
    } else {
        console.error("Formula database not found!");
    }


    /* -----------------------------------------------------
       3. BASIC MATHEMATICS CARD
       ----------------------------------------------------- */

    const mathsHub = document.getElementById("maths-hub");

    if (mathsHub) {

        const categoryCards = mathsHub.querySelectorAll(".formula-category");

        categoryCards.forEach(function (card) {

            const heading = card.querySelector("h3");

            if (!heading) return;

            const headingText = heading.textContent.trim().toLowerCase();

            /*
             * Find Basic Mathematics category
             */
            if (headingText.includes("basic mathematics")) {

                card.style.cursor = "pointer";

                card.addEventListener("click", function () {
                    openBasicMathematics();
                });

            }

        });

    }


    /* -----------------------------------------------------
       4. SEARCH SYSTEM
       ----------------------------------------------------- */

    const searchInput = document.getElementById("formula-search");
    const searchButton = document.getElementById("search-btn");

    function performSearch() {

        if (!searchInput) return;

        const query = searchInput.value.trim();

        if (!query) {
            clearSearch();
            return;
        }

        /*
         * Search formula database
         */
        if (typeof searchFormulaDatabase === "function") {

            const results = searchFormulaDatabase(query);

            console.log("Search results:", results);

            if (results.length > 0) {

                /*
                 * If a result belongs to Basic Mathematics,
                 * open the Basic Mathematics section.
                 */
                const basicResult = results.find(function (formula) {
                    return formulaDatabase.basicMathematics &&
                           formulaDatabase.basicMathematics.some(function (item) {
                               return item.id === formula.id;
                           });
                });

                if (basicResult) {
                    openBasicMathematics();
                }

            } else {

                alert("No formula found for: " + query);

            }

        }

    }

    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                performSearch();
            }

        });

    }


    /* -----------------------------------------------------
       5. HUB CARD NAVIGATION
       ----------------------------------------------------- */

    const hubCards = document.querySelectorAll(".hub-card");

    hubCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const target = card.getAttribute("data-target");

            if (target) {
                showSection(target);
            }

        });

    });


    /* -----------------------------------------------------
       6. BACK TO TOP
       ----------------------------------------------------- */

    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* -----------------------------------------------------
       7. "/" SHORTCUT FOR SEARCH
       ----------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "/" &&
            document.activeElement !== searchInput
        ) {

            event.preventDefault();

            if (searchInput) {
                searchInput.focus();
            }

        }

    });


    console.log("Engineering Formula Hub JavaScript loaded.");
});


/* =========================================================
   SHOW SECTION
   ========================================================= */

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


/* =========================================================
   BASIC MATHEMATICS VIEW
   ========================================================= */

function openBasicMathematics() {

    if (
        typeof formulaDatabase === "undefined" ||
        !formulaDatabase.basicMathematics
    ) {
        alert("Basic Mathematics formulas could not be loaded.");
        return;
    }


    const formulas = formulaDatabase.basicMathematics;


    /*
     * Check whether the formula page already exists.
     */
    let formulaPage = document.getElementById(
        "basic-mathematics-page"
    );


    /*
     * Create the page for the first time.
     */
    if (!formulaPage) {

        formulaPage = document.createElement("section");

        formulaPage.id = "basic-mathematics-page";

        formulaPage.style.minHeight = "100vh";
        formulaPage.style.padding = "40px 20px";
        formulaPage.style.background = "#0b0b0b";
        formulaPage.style.color = "#ffffff";


        /* -------------------------------------------------
           Header
           ------------------------------------------------- */

        const header = document.createElement("div");

        header.style.maxWidth = "1100px";
        header.style.margin = "0 auto 35px";


        const backButton = document.createElement("button");

        backButton.textContent = "← Back to Maths Hub";

        backButton.style.padding = "12px 20px";
        backButton.style.border = "1px solid #ff8a00";
        backButton.style.background = "transparent";
        backButton.style.color = "#ff8a00";
        backButton.style.borderRadius = "8px";
        backButton.style.cursor = "pointer";
        backButton.style.fontSize = "15px";


        backButton.addEventListener("click", function () {

            const mathsHub = document.getElementById("maths-hub");

            if (mathsHub) {

                mathsHub.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });


        const title = document.createElement("h1");

        title.textContent = "Basic Mathematics";

        title.style.fontSize = "clamp(32px, 6vw, 58px)";
        title.style.margin = "25px 0 10px";
        title.style.color = "#ff8a00";


        const subtitle = document.createElement("p");

        subtitle.textContent =
            "Fundamental mathematical formulas for engineering.";

        subtitle.style.fontSize = "18px";
        subtitle.style.color = "#bdbdbd";


        header.appendChild(backButton);
        header.appendChild(title);
        header.appendChild(subtitle);


        /* -------------------------------------------------
           Formula count
           ------------------------------------------------- */

        const count = document.createElement("div");

        count.textContent =
            formulas.length + " formulas available";

        count.style.display = "inline-block";
        count.style.marginTop = "15px";
        count.style.padding = "8px 14px";
        count.style.borderRadius = "20px";
        count.style.background = "#171717";
        count.style.border = "1px solid #333";
        count.style.color = "#ff8a00";


        header.appendChild(count);


        /* -------------------------------------------------
           Formula Grid
           ------------------------------------------------- */

        const grid = document.createElement("div");

        grid.id = "basic-mathematics-grid";

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
            card.style.cursor = "pointer";
            card.style.transition = "0.25s";


            card.addEventListener("mouseenter", function () {

                card.style.borderColor = "#ff8a00";
                card.style.transform = "translateY(-3px)";

            });


            card.addEventListener("mouseleave", function () {

                card.style.borderColor = "#2d2d2d";
                card.style.transform = "translateY(0)";

            });


            const number = document.createElement("div");

            number.textContent =
                String(index + 1).padStart(2, "0");

            number.style.color = "#777";
            number.style.fontSize = "13px";
            number.style.marginBottom = "10px";


            const name = document.createElement("h3");

            name.textContent = formula.name;

            name.style.fontSize = "22px";
            name.style.margin = "0 0 14px";
            name.style.color = "#ffffff";


            const formulaText = document.createElement("div");

            formulaText.textContent = formula.formula;

            formulaText.style.fontSize = "21px";
            formulaText.style.fontWeight = "600";
            formulaText.style.color = "#ff8a00";
            formulaText.style.padding = "14px";
            formulaText.style.background = "#0d0d0d";
            formulaText.style.borderRadius = "8px";
            formulaText.style.overflowX = "auto";


            card.appendChild(number);
            card.appendChild(name);
            card.appendChild(formulaText);


            /*
             * Formula detail will be connected in next step.
             */
            card.addEventListener("click", function () {

                console.log(
                    "Formula selected:",
                    formula.name,
                    formula.id
                );

            });


            grid.appendChild(card);

        });


        formulaPage.appendChild(header);
        formulaPage.appendChild(grid);


        /*
         * Add page after Maths Hub.
         */
        const mathsHubSection = document.getElementById("maths-hub");

        if (mathsHubSection) {
            mathsHubSection.parentNode.insertBefore(
                formulaPage,
                mathsHubSection.nextSibling
            );
        }

    }


    /*
     * Show the formula page.
     */

    formulaPage.style.display = "block";


    setTimeout(function () {

        formulaPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

function clearSearch() {

    const searchInput =
        document.getElementById("formula-search");

    if (searchInput) {
        searchInput.value = "";
    }

}


/* =========================================================
   CONSOLE INFO
   ========================================================= */

console.log(
    "%cEngineering Formula Hub",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "Ready for formula database integration."
);
