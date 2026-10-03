/* =========================================================
   ENGINEERING FORMULA HUB
   formulas.js

   SECTION 01 — BASIC MATHEMATICS
   TEST VERSION — FORMULAS 01 TO 10
========================================================= */

const formulaDatabase = {

    basicMathematics: [

        /* ---------- 01 ---------- */
        {
            id: "addition",
            name: "Addition",
            formula: "a + b = c",

            terms: [
                "a, b = numbers being added",
                "c = sum"
            ],

            example: {
                question: "Calculate 25 + 17",
                solution: "25 + 17 = 42",
                answer: "42"
            },

            note: "Addition combines two or more quantities."
        },

        /* ---------- 02 ---------- */
        {
            id: "subtraction",
            name: "Subtraction",
            formula: "a − b = c",

            terms: [
                "a = minuend",
                "b = subtrahend",
                "c = difference"
            ],

            example: {
                question: "Calculate 50 − 18",
                solution: "50 − 18 = 32",
                answer: "32"
            },

            note: "Subtraction finds the difference between quantities."
        },

        /* ---------- 03 ---------- */
        {
            id: "multiplication",
            name: "Multiplication",
            formula: "a × b = c",

            terms: [
                "a, b = factors",
                "c = product"
            ],

            example: {
                question: "Calculate 12 × 8",
                solution: "12 × 8 = 96",
                answer: "96"
            },

            note: "Multiplication is repeated addition."
        },

        /* ---------- 04 ---------- */
        {
            id: "division",
            name: "Division",
            formula: "a ÷ b = c",

            terms: [
                "a = dividend",
                "b = divisor",
                "c = quotient"
            ],

            example: {
                question: "Calculate 144 ÷ 12",
                solution: "144 ÷ 12 = 12",
                answer: "12"
            },

            note: "The divisor must not be zero."
        },

        /* ---------- 05 ---------- */
        {
            id: "fraction-addition",
            name: "Addition of Fractions",
            formula: "a/b + c/d = (ad + bc)/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators",
                "b, d ≠ 0"
            ],

            example: {
                question: "Calculate 1/2 + 1/3",
                solution: "1/2 + 1/3 = 3/6 + 2/6 = 5/6",
                answer: "5/6"
            },

            note: "Use a common denominator before adding fractions."
        },

        /* ---------- 06 ---------- */
        {
            id: "fraction-subtraction",
            name: "Subtraction of Fractions",
            formula: "a/b − c/d = (ad − bc)/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators",
                "b, d ≠ 0"
            ],

            example: {
                question: "Calculate 3/4 − 1/2",
                solution: "3/4 − 2/4 = 1/4",
                answer: "1/4"
            },

            note: "Use a common denominator before subtracting fractions."
        },

        /* ---------- 07 ---------- */
        {
            id: "fraction-multiplication",
            name: "Multiplication of Fractions",
            formula: "a/b × c/d = ac/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators"
            ],

            example: {
                question: "Calculate 2/3 × 3/5",
                solution: "(2 × 3)/(3 × 5) = 6/15 = 2/5",
                answer: "2/5"
            },

            note: "Multiply numerators together and denominators together."
        },

        /* ---------- 08 ---------- */
        {
            id: "fraction-division",
            name: "Division of Fractions",
            formula: "a/b ÷ c/d = a/b × d/c",

            terms: [
                "a, b, c, d = numbers",
                "b, c, d ≠ 0"
            ],

            example: {
                question: "Calculate 2/3 ÷ 4/5",
                solution: "2/3 × 5/4 = 10/12 = 5/6",
                answer: "5/6"
            },

            note: "To divide by a fraction, multiply by its reciprocal."
        },

        /* ---------- 09 ---------- */
        {
            id: "ratio",
            name: "Ratio",
            formula: "a : b = a/b",

            terms: [
                "a = first quantity",
                "b = second quantity",
                "b ≠ 0"
            ],

            example: {
                question: "Find the ratio of 20 to 30",
                solution: "20 : 30 = 2 : 3",
                answer: "2 : 3"
            },

            note: "Ratios should normally be simplified to their lowest terms."
        },

        /* ---------- 10 ---------- */
        {
            id: "proportion",
            name: "Proportion",
            formula: "a/b = c/d  ⇒  ad = bc",

            terms: [
                "a, b, c, d = quantities",
                "b, d ≠ 0"
            ],

            example: {
                question: "Check whether 2/3 and 8/12 are proportional",
                solution: "2 × 12 = 24 and 3 × 8 = 24",
                answer: "Yes, they are proportional."
            },

            note: "In a proportion, cross products are equal."
        }

    ]

};


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getFormulaSection(sectionName) {

    return formulaDatabase[sectionName] || [];

}


function getFormulaById(id) {

    const allSections = Object.values(formulaDatabase);

    for (const section of allSections) {

        const formula = section.find(item => item.id === id);

        if (formula) {
            return formula;
        }

    }

    return null;

}


function searchFormulaDatabase(query) {

    const searchText = query.trim().toLowerCase();

    if (!searchText) {
        return [];
    }

    const results = [];

    Object.values(formulaDatabase).forEach(section => {

        section.forEach(formula => {

            const searchableText = [
                formula.name,
                formula.formula,
                ...formula.terms
            ]
                .join(" ")
                .toLowerCase();

            if (searchableText.includes(searchText)) {
                results.push(formula);
            }

        });

    });

    return results;

}


function getTotalFormulaCount() {

    let total = 0;

    Object.values(formulaDatabase).forEach(section => {

        total += section.length;

    });

    return total;

}


/* =========================================================
   DATABASE STATUS
========================================================= */

console.log("Formula database loaded successfully.");
console.log("Current formulas:", getTotalFormulaCount());
