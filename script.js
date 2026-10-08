/* =========================================================
   FORMULAHUB 2.0
   MAIN APPLICATION LOGIC
   ========================================================= */


/* =========================================================
   1. GLOBAL STATE
   ========================================================= */

const state = {
    currentScreen: "splash-screen",

    previousScreen: "home-screen",

    currentSubject: null,

    currentChapter: null,

    currentFormula: null,

    history: []
};


/* =========================================================
   2. SCREEN ELEMENTS
   ========================================================= */

const screens = {
    splash: document.getElementById("splash-screen"),
    home: document.getElementById("home-screen"),
    subject: document.getElementById("subject-screen"),
    chapter: document.getElementById("chapter-screen"),
    formula: document.getElementById("formula-screen"),
    future: document.getElementById("future-screen"),
    about: document.getElementById("about-screen")
};


/* =========================================================
   3. SAFE FORMULA DATABASE ACCESS
   ========================================================= */

/*
    formulas.js is intentionally kept separate.

    IMPORTANT:
    Future formula additions should happen inside:

        data/formulas.js

    The rest of the website should not need editing.
*/

function getFormulaDatabase() {

    /*
        We support several possible variable names so the
        formula database can be changed later without
        breaking the application.
    */

    if (typeof FORMULAS !== "undefined") {
        return FORMULAS;
    }

    if (typeof formulas !== "undefined") {
        return formulas;
    }

    if (typeof formulaData !== "undefined") {
        return formulaData;
    }

    return [];
}


/* =========================================================
   4. NORMALIZE DATABASE
   ========================================================= */

function normalizeDatabase() {

    const database = getFormulaDatabase();

    if (Array.isArray(database)) {
        return database;
    }

    /*
        If formulas.js later uses:

        {
            Maths: [...],
            Physics: [...],
            Chemistry: [...]
        }

        this converts it into one common array.
    */

    if (
        database &&
        typeof database === "object"
    ) {

        const output = [];

        Object.keys(database).forEach(subject => {

            const subjectItems = database[subject];

            if (!Array.isArray(subjectItems)) {
                return;
            }

            subjectItems.forEach(item => {

                output.push({
                    ...item,
                    subject:
                        item.subject || subject
                });

            });

        });

        return output;
    }

    return [];
}


/* =========================================================
   5. DATABASE
   ========================================================= */

function getAllFormulas() {
    return normalizeDatabase();
}


/* =========================================================
   6. SCREEN NAVIGATION
   ========================================================= */

function showScreen(screenId, addHistory = true) {

    const target = document.getElementById(screenId);

    if (!target) {
        console.warn(
            "FormulaHub: Screen not found:",
            screenId
        );

        return;
    }


    /*
        Save current screen before moving forward.
    */

    if (
        addHistory &&
        state.currentScreen !== screenId
    ) {

        state.history.push(
            state.currentScreen
        );

    }


    /*
        Remove active state from every screen.
    */

    Object.values(screens).forEach(screen => {

        if (screen) {
            screen.classList.remove("active");
        }

    });


    /*
        Activate requested screen.
    */

    target.classList.add("active");


    /*
        Update state.
    */

    state.currentScreen = screenId;


    /*
        Scroll dynamic areas back to top.
    */

    resetScrollPosition(target);
}


/* =========================================================
   7. RESET SCROLL
   ========================================================= */

function resetScrollPosition(screen) {

    if (!screen) return;

    const scrollAreas =
        screen.querySelectorAll(
            ".home-content, .page-content, .formula-content, .about-content"
        );

    scrollAreas.forEach(area => {

        area.scrollTop = 0;

    });
}


/* =========================================================
   8. GO BACK
   ========================================================= */

function goBack() {

    if (state.history.length === 0) {

        showScreen(
            "home-screen",
            false
        );

        return;
    }


    const previous =
        state.history.pop();


    showScreen(
        previous,
        false
    );
}


/* =========================================================
   9. SPLASH SCREEN
   ========================================================= */

function startApplication() {

    /*
        Splash duration:
        approximately 3 seconds.
    */

    setTimeout(() => {

        showScreen(
            "home-screen",
            false
        );

    }, 3000);
}


/* =========================================================
   10. SUBJECT NAVIGATION
   ========================================================= */

function openSubject(subject) {

    if (!subject) return;


    state.currentSubject = subject;

    state.currentChapter = null;

    state.currentFormula = null;


    /*
        Update subject title.
    */

    const title =
        document.getElementById(
            "subject-title"
        );

    if (title) {
        title.textContent =
            `${subject} Hub`;
    }


    /*
        Update description.
    */

    const description =
        document.getElementById(
            "subject-description"
        );

    if (description) {

        description.textContent =
            `Choose a ${subject} chapter to continue.`;

    }


    /*
        Generate chapters.
    */

    renderChapters(subject);


    /*
        Open subject screen.
    */

    showScreen(
        "subject-screen"
    );
}


/* =========================================================
   11. GET CHAPTERS
   ========================================================= */

function getChapters(subject) {

    const formulas =
        getAllFormulas();

    const chapters = [];


    formulas.forEach(formula => {

        if (!formula) return;

        if (
            String(formula.subject)
                .toLowerCase() !==
            String(subject)
                .toLowerCase()
        ) {
            return;
        }


        const chapter =
            formula.chapter ||
            formula.topic ||
            formula.section;


        if (!chapter) return;


        if (!chapters.includes(chapter)) {

            chapters.push(chapter);

        }

    });


    return chapters;
}


/* =========================================================
   12. RENDER CHAPTERS
   ========================================================= */

function renderChapters(subject) {

    const container =
        document.getElementById(
            "chapter-list"
        );

    if (!container) return;


    container.innerHTML = "";


    const chapters =
        getChapters(subject);


    /*
        No formula data yet.
    */

    if (chapters.length === 0) {

        container.innerHTML = `

            <div class="coming-soon-card">

                <span class="coming-icon">
                    ⚙
                </span>

                <h3>
                    Chapters Coming Soon
                </h3>

                <p>
                    The ${escapeHTML(subject)}
                    formula library is being prepared.
                </p>

            </div>

        `;

        return;
    }


    /*
        Create chapter cards.
    */

    chapters.forEach(
        (chapter, index) => {

            const card =
                document.createElement("button");

            card.className =
                "dynamic-card";

            card.type = "button";


            card.innerHTML = `

                <div class="dynamic-card-icon">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="dynamic-card-info">

                    <h3>
                        ${escapeHTML(chapter)}
                    </h3>

                    <p>
                        Open chapter
                    </p>

                </div>

                <div class="dynamic-card-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openChapter(
                        subject,
                        chapter
                    );

                }
            );


            container.appendChild(card);

        }
    );
}


/* =========================================================
   13. OPEN CHAPTER
   ========================================================= */

function openChapter(
    subject,
    chapter
) {

    state.currentSubject =
        subject;

    state.currentChapter =
        chapter;

    state.currentFormula =
        null;


    const title =
        document.getElementById(
            "chapter-title"
        );

    if (title) {
        title.textContent =
            chapter;
    }


    const label =
        document.getElementById(
            "chapter-subject-label"
        );

    if (label) {
        label.textContent =
            String(subject).toUpperCase();
    }


    renderFormulas(
        subject,
        chapter
    );


    showScreen(
        "chapter-screen"
    );
}


/* =========================================================
   14. GET FORMULAS FOR CHAPTER
   ========================================================= */

function getFormulasForChapter(
    subject,
    chapter
) {

    const formulas =
        getAllFormulas();


    return formulas.filter(
        formula => {

            if (!formula) {
                return false;
            }


            const sameSubject =
                String(formula.subject)
                    .toLowerCase() ===
                String(subject)
                    .toLowerCase();


            const formulaChapter =
                formula.chapter ||
                formula.topic ||
                formula.section ||
                "";


            const sameChapter =
                String(formulaChapter)
                    .toLowerCase() ===
                String(chapter)
                    .toLowerCase();


            return (
                sameSubject &&
                sameChapter
            );

        }
    );
}


/* =========================================================
   15. RENDER FORMULAS
   ========================================================= */

function renderFormulas(
    subject,
    chapter
) {

    const container =
        document.getElementById(
            "formula-list"
        );

    if (!container) return;


    container.innerHTML = "";


    const formulas =
        getFormulasForChapter(
            subject,
            chapter
        );


    /*
        No formulas in chapter.
    */

    if (formulas.length === 0) {

        container.innerHTML = `

            <div class="coming-soon-card">

                <span class="coming-icon">
                    ∑
                </span>

                <h3>
                    Formulas Coming Soon
                </h3>

                <p>
                    This chapter has been created,
                    but its formulas are not added yet.
                </p>

            </div>

        `;

        return;
    }


    /*
        Create formula cards.
    */

    formulas.forEach(
        (formula, index) => {

            const card =
                document.createElement("button");

            card.className =
                "dynamic-card";

            card.type = "button";


            const formulaName =
                formula.name ||
                formula.title ||
                `Formula ${index + 1}`;


            card.innerHTML = `

                <div class="dynamic-card-icon">
                    ∑
                </div>

                <div class="dynamic-card-info">

                    <h3>
                        ${escapeHTML(formulaName)}
                    </h3>

                    <p>
                        View formula & example
                    </p>

                </div>

                <div class="dynamic-card-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openFormula(
                        formula
                    );

                }
            );


            container.appendChild(card);

        }
    );
}


/* =========================================================
   16. OPEN FORMULA
   ========================================================= */

function openFormula(formula) {

    if (!formula) return;


    state.currentFormula =
        formula;


    /*
        Formula title
    */

    const title =
        document.getElementById(
            "formula-title"
        );


    if (title) {

        title.textContent =
            formula.name ||
            formula.title ||
            "Formula";

    }


    /*
        Formula image
    */

    const image =
        document.getElementById(
            "formula-image"
        );

    const placeholder =
        document.getElementById(
            "formula-image-placeholder"
        );


    const imagePath =
        formula.image ||
        formula.imageUrl ||
        formula.formulaImage;


    if (
        imagePath &&
        image
    ) {

        image.src = imagePath;

        image.style.display =
            "block";


        if (placeholder) {

            placeholder.style.display =
                "none";

        }


        /*
            If image fails, show fallback.
        */

        image.onerror = () => {

            image.style.display =
                "none";


            if (placeholder) {

                placeholder.style.display =
                    "block";

                placeholder.textContent =
                    "Formula image unavailable";

            }

        };

    } else {

        if (image) {

            image.style.display =
                "none";

        }


        if (placeholder) {

            placeholder.style.display =
                "block";

            placeholder.textContent =
                "Formula image will appear here";

        }

    }


    /*
        Terms
    */

    setFormulaField(
        "formula-terms",
        formatTerms(
            formula.terms ||
            formula.variables ||
            formula.where
        )
    );


    /*
        Unit
    */

    setFormulaField(
        "formula-unit",
        formula.unit ||
        formula.units ||
        "—"
    );


    /*
        Example
    */

    setFormulaField(
        "formula-example",
        formula.example ||
        formula.examples ||
        "—"
    );


    /*
        Note
    */

    const noteCard =
        document.getElementById(
            "formula-note-card"
        );

    const note =
        document.getElementById(
            "formula-note"
        );


    if (
        formula.note ||
        formula.notes
    ) {

        if (noteCard) {
            noteCard.style.display =
                "block";
        }

        if (note) {

            note.textContent =
                formula.note ||
                formula.notes;

        }

    } else {

        if (noteCard) {
            noteCard.style.display =
                "none";
        }

    }


    showScreen(
        "formula-screen"
    );
}


/* =========================================================
   17. SET FORMULA FIELD
   ========================================================= */

function setFormulaField(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) return;


    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        element.textContent = "—";

        return;
    }


    element.textContent =
        String(value);
}


/* =========================================================
   18. FORMAT TERMS
   ========================================================= */

function formatTerms(terms) {

    if (!terms) {
        return "—";
    }


    /*
        Array:

        [
            "F = Force",
            "m = Mass"
        ]
    */

    if (Array.isArray(terms)) {

        return terms.join("\n");

    }


    return String(terms);
}


/* =========================================================
   19. FUTURE ENGINEERS
   ========================================================= */

function openFutureEngineers() {

    showScreen(
        "future-screen"
    );
}


/* =========================================================
   20. ABOUT PAGE
   ========================================================= */

function openAbout() {

    showScreen(
        "about-screen"
    );
}


/* =========================================================
   21. EVENT HANDLER SYSTEM
   ========================================================= */

function setupActions() {

    /*
        Subject buttons
    */

    document
        .querySelectorAll(
            '[data-action="subject"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const subject =
                        button.dataset.subject;

                    openSubject(
                        subject
                    );

                }
            );

        });


    /*
        Future Engineers
    */

    document
        .querySelectorAll(
            '[data-action="future-engineers"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                openFutureEngineers
            );

        });


    /*
        About
    */

    document
        .querySelectorAll(
            '[data-action="about"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                openAbout
            );

        });


    /*
        Back buttons
    */

    document
        .querySelectorAll(
            '[data-action="back"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                goBack
            );

        });

}


/* =========================================================
   22. ANDROID / BROWSER BACK BUTTON
   ========================================================= */

window.addEventListener(
    "popstate",
    () => {

        goBack();

    }
);


/* =========================================================
   23. SECURITY / SAFE TEXT
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }


    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
                  
        );
}


/* =========================================================
   24. INITIALIZATION
   ========================================================= */

function initializeFormulaHub() {

    setupActions();

    startApplication();

}


/* =========================================================
   START APPLICATION
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeFormulaHub
    );

} else {

    initializeFormulaHub();

}
     
