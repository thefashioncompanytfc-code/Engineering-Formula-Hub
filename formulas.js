/* =========================================================
   ENGINEERING FORMULA HUB
   formulas.js

   SECTION 01 — BASIC MATHEMATICS

   Structure:
   id
   name
   formula
   terms
   example
   note
========================================================= */


const formulaDatabase = {

    /* =====================================================
       SECTION 01
       BASIC MATHEMATICS
    ===================================================== */

    basicMathematics: [

        /* -------------------------------------------------
           01. ADDITION
        ------------------------------------------------- */

        {
            id: "basic-addition",
            name: "Addition",
            formula: "a + b = c",

            terms: [
                "a = first number",
                "b = second number",
                "c = sum of a and b"
            ],

            example: {
                question: "Find 27 + 35",
                solution: "27 + 35 = 62",
                answer: "62"
            },

            note: "Addition combines two or more quantities."
        },


        /* -------------------------------------------------
           02. SUBTRACTION
        ------------------------------------------------- */

        {
            id: "basic-subtraction",
            name: "Subtraction",
            formula: "a - b = c",

            terms: [
                "a = minuend",
                "b = subtrahend",
                "c = difference"
            ],

            example: {
                question: "Find 75 - 28",
                solution: "75 - 28 = 47",
                answer: "47"
            },

            note: "Subtraction finds the difference between quantities."
        },


        /* -------------------------------------------------
           03. MULTIPLICATION
        ------------------------------------------------- */

        {
            id: "basic-multiplication",
            name: "Multiplication",
            formula: "a × b = c",

            terms: [
                "a = first factor",
                "b = second factor",
                "c = product"
            ],

            example: {
                question: "Find 12 × 8",
                solution: "12 × 8 = 96",
                answer: "96"
            },

            note: "Multiplication is repeated addition of equal quantities."
        },


        /* -------------------------------------------------
           04. DIVISION
        ------------------------------------------------- */

        {
            id: "basic-division",
            name: "Division",
            formula: "a ÷ b = c",

            terms: [
                "a = dividend",
                "b = divisor",
                "c = quotient"
            ],

            example: {
                question: "Find 144 ÷ 12",
                solution: "144 ÷ 12 = 12",
                answer: "12"
            },

            note: "The divisor cannot be zero."
        },


        /* -------------------------------------------------
           05. FRACTION ADDITION
        ------------------------------------------------- */

        {
            id: "fraction-addition",
            name: "Addition of Fractions",
            formula: "a/b + c/d = (ad + bc)/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators",
                "b ≠ 0 and d ≠ 0"
            ],

            example: {
                question: "Find 1/3 + 1/4",
                solution: "1/3 + 1/4 = (4 + 3)/12 = 7/12",
                answer: "7/12"
            },

            note: "For fractions with different denominators, use a common denominator."
        },


        /* -------------------------------------------------
           06. FRACTION SUBTRACTION
        ------------------------------------------------- */

        {
            id: "fraction-subtraction",
            name: "Subtraction of Fractions",
            formula: "a/b - c/d = (ad - bc)/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators",
                "b ≠ 0 and d ≠ 0"
            ],

            example: {
                question: "Find 3/4 - 1/6",
                solution: "3/4 - 1/6 = (18 - 4)/24 = 14/24 = 7/12",
                answer: "7/12"
            },

            note: "Always simplify the final fraction when possible."
        },


        /* -------------------------------------------------
           07. FRACTION MULTIPLICATION
        ------------------------------------------------- */

        {
            id: "fraction-multiplication",
            name: "Multiplication of Fractions",
            formula: "a/b × c/d = ac/bd",

            terms: [
                "a, c = numerators",
                "b, d = denominators",
                "b ≠ 0 and d ≠ 0"
            ],

            example: {
                question: "Find 2/3 × 5/7",
                solution: "2/3 × 5/7 = 10/21",
                answer: "10/21"
            },

            note: "Multiply numerators together and denominators together."
        },


        /* -------------------------------------------------
           08. FRACTION DIVISION
        ------------------------------------------------- */

        {
            id: "fraction-division",
            name: "Division of Fractions",
            formula: "a/b ÷ c/d = a/b × d/c = ad/bc",

            terms: [
                "a, b, c, d = numerical values",
                "b ≠ 0",
                "c ≠ 0"
            ],

            example: {
                question: "Find (2/3) ÷ (4/5)",
                solution: "(2/3) × (5/4) = 10/12 = 5/6",
                answer: "5/6"
            },

            note: "To divide by a fraction, multiply by its reciprocal."
        },


        /* -------------------------------------------------
           09. RATIO
        ------------------------------------------------- */

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

            note: "Ratio compares two quantities of the same kind."
        },


        /* -------------------------------------------------
           10. PROPORTION
        ------------------------------------------------- */

        {
            id: "proportion",
            name: "Proportion",
            formula: "a/b = c/d  ⇒  ad = bc",

            terms: [
                "a, b, c, d = quantities",
                "b ≠ 0 and d ≠ 0"
            ],

            example: {
                question: "If x/5 = 6/10, find x",
                solution: "10x = 30 ⇒ x = 3",
                answer: "3"
            },

            note: "Cross multiplication can be used when the denominators are non-zero."
        },


        /* -------------------------------------------------
           11. PERCENTAGE
        ------------------------------------------------- */

        {
            id: "percentage",
            name: "Percentage",
            formula: "Percentage = (Part / Whole) × 100",

            terms: [
                "Part = required portion",
                "Whole = total quantity"
            ],

            example: {
                question: "What percentage is 25 out of 200?",
                solution: "(25/200) × 100 = 12.5%",
                answer: "12.5%"
            },

            note: "Percentage means a quantity expressed per hundred."
        },


        /* -------------------------------------------------
           12. PERCENTAGE CHANGE
        ------------------------------------------------- */

        {
            id: "percentage-change",
            name: "Percentage Change",
            formula: "Percentage Change = |New − Original| / Original × 100",

            terms: [
                "Original = initial value",
                "New = final value"
            ],

            example: {
                question: "A value changes from 80 to 100. Find the percentage change.",
                solution: "|100 − 80| / 80 × 100 = 25%",
                answer: "25%"
            },

            note: "The original value is used as the reference value."
        },


        /* -------------------------------------------------
           13. PERCENTAGE INCREASE
        ------------------------------------------------- */

        {
            id: "percentage-increase",
            name: "Percentage Increase",
            formula: "Percentage Increase = (Increase / Original) × 100",

            terms: [
                "Increase = New value − Original value",
                "Original = initial value"
            ],

            example: {
                question: "A value increases from 200 to 250.",
                solution: "Increase = 250 − 200 = 50; (50/200) × 100 = 25%",
                answer: "25%"
            },

            note: "Use the original value as the denominator."
        },


        /* -------------------------------------------------
           14. PERCENTAGE DECREASE
        ------------------------------------------------- */

        {
            id: "percentage-decrease",
            name: "Percentage Decrease",
            formula: "Percentage Decrease = (Decrease / Original) × 100",

            terms: [
                "Decrease = Original value − New value",
                "Original = initial value"
            ],

            example: {
                question: "A value decreases from 500 to 400.",
                solution: "Decrease = 500 − 400 = 100; (100/500) × 100 = 20%",
                answer: "20%"
            },

            note: "Use the original value as the denominator."
        },


        /* -------------------------------------------------
           15. POWER
        ------------------------------------------------- */

        {
            id: "power",
            name: "Power",
            formula: "aⁿ = a × a × a × ... × a  (n times)",

            terms: [
                "a = base",
                "n = exponent or power"
            ],

            example: {
                question: "Find 2⁵",
                solution: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
                answer: "32"
            },

            note: "For a positive integer n, aⁿ represents n repeated factors of a."
        },


        /* -------------------------------------------------
           16. ZERO EXPONENT
        ------------------------------------------------- */

        {
            id: "zero-exponent",
            name: "Zero Exponent Law",
            formula: "a⁰ = 1",

            terms: [
                "a = non-zero number"
            ],

            example: {
                question: "Find 25⁰",
                solution: "25⁰ = 1",
                answer: "1"
            },

            note: "The base must be non-zero."
        },


        /* -------------------------------------------------
           17. NEGATIVE EXPONENT
        ------------------------------------------------- */

        {
            id: "negative-exponent",
            name: "Negative Exponent Law",
            formula: "a⁻ⁿ = 1/aⁿ",

            terms: [
                "a = non-zero number",
                "n = positive exponent"
            ],

            example: {
                question: "Simplify 2⁻³",
                solution: "2⁻³ = 1/2³ = 1/8",
                answer: "1/8"
            },

            note: "A negative exponent indicates the reciprocal."
        },


        /* -------------------------------------------------
           18. PRODUCT OF POWERS
        ------------------------------------------------- */

        {
            id: "product-powers",
            name: "Product of Powers",
            formula: "aᵐ × aⁿ = aᵐ⁺ⁿ",

            terms: [
                "a = common base",
                "m, n = exponents"
            ],

            example: {
                question: "Simplify x³ × x⁵",
                solution: "x³ × x⁵ = x⁸",
                answer: "x⁸"
            },

            note: "The bases must be the same."
        },


        /* -------------------------------------------------
           19. QUOTIENT OF POWERS
        ------------------------------------------------- */

        {
            id: "quotient-powers",
            name: "Quotient of Powers",
            formula: "aᵐ / aⁿ = aᵐ⁻ⁿ",

            terms: [
                "a = common non-zero base",
                "m, n = exponents"
            ],

            example: {
                question: "Simplify x⁷ / x³",
                solution: "x⁷ / x³ = x⁴",
                answer: "x⁴"
            },

            note: "Subtract the denominator exponent from the numerator exponent."
        },


        /* -------------------------------------------------
           20. POWER OF A POWER
        ------------------------------------------------- */

        {
            id: "power-of-power",
            name: "Power of a Power",
            formula: "(aᵐ)ⁿ = aᵐⁿ",

            terms: [
                "a = base",
                "m, n = exponents"
            ],

            example: {
                question: "Simplify (x²)³",
                solution: "(x²)³ = x⁶",
                answer: "x⁶"
            },

            note: "When a power is raised to another power, multiply the exponents."
        },


        /* -------------------------------------------------
           21. POWER OF A PRODUCT
        ------------------------------------------------- */

        {
            id: "power-product",
            name: "Power of a Product",
            formula: "(ab)ⁿ = aⁿbⁿ",

            terms: [
                "a, b = factors",
                "n = exponent"
            ],

            example: {
                question: "Simplify (2x)³",
                solution: "(2x)³ = 2³x³ = 8x³",
                answer: "8x³"
            },

            note: "The exponent applies to every factor inside the product."
        },


        /* -------------------------------------------------
           22. POWER OF A QUOTIENT
        ------------------------------------------------- */

        {
            id: "power-quotient",
            name: "Power of a Quotient",
            formula: "(a/b)ⁿ = aⁿ/bⁿ",

            terms: [
                "a = numerator",
                "b = non-zero denominator",
                "n = exponent"
            ],

            example: {
                question: "Simplify (2/3)²",
                solution: "(2/3)² = 2²/3² = 4/9",
                answer: "4/9"
            },

            note: "The exponent applies to both numerator and denominator."
        },


        /* -------------------------------------------------
           23. SQUARE ROOT
        ------------------------------------------------- */

        {
            id: "square-root",
            name: "Square Root",
            formula: "√a = b  ⇔  b² = a",

            terms: [
                "a = non-negative number",
                "b = principal square root of a"
            ],

            example: {
                question: "Find √144",
                solution: "12² = 144",
                answer: "12"
            },

            note: "√a denotes the principal non-negative square root."
        },


        /* -------------------------------------------------
           24. CUBE ROOT
        ------------------------------------------------- */

        {
            id: "cube-root",
            name: "Cube Root",
            formula: "∛a = b  ⇔  b³ = a",

            terms: [
                "a = real number",
                "b = cube root of a"
            ],

            example: {
                question: "Find ∛125",
                solution: "5³ = 125",
                answer: "5"
            },

            note: "Cube roots are defined for positive, zero and negative real numbers."
        },


        /* -------------------------------------------------
           25. SURD PRODUCT
        ------------------------------------------------- */

        {
            id: "surd-product",
            name: "Product of Square Roots",
            formula: "√a × √b = √(ab)",

            terms: [
                "a, b = non-negative real numbers"
            ],

            example: {
                question: "Simplify √2 × √8",
                solution: "√(2 × 8) = √16 = 4",
                answer: "4"
            },

            note: "For real square roots, a and b must be non-negative."
        },


        /* -------------------------------------------------
           26. SURD QUOTIENT
        ------------------------------------------------- */

        {
            id: "surd-quotient",
            name: "Quotient of Square Roots",
            formula: "√a / √b = √(a/b)",

            terms: [
                "a = non-negative real number",
                "b = positive real number"
            ],

            example: {
                question: "Simplify √18 / √2",
                solution: "√(18/2) = √9 = 3",
                answer: "3"
            },

            note: "The denominator must be non-zero."
        },


        /* -------------------------------------------------
           27. AVERAGE
        ------------------------------------------------- */

        {
            id: "arithmetic-mean",
            name: "Arithmetic Mean",
            formula: "Mean = Sum of observations / Number of observations",

            terms: [
                "Sum of observations = total of all values",
                "Number of observations = total count of values"
            ],

            example: {
                question: "Find the mean of 10, 20 and 30.",
                solution: "(10 + 20 + 30) / 3 = 20",
                answer: "20"
            },

            note: "This is the arithmetic average."
        },


        /* -------------------------------------------------
           28. BASIC ALGEBRAIC ADDITION
        ------------------------------------------------- */

        {
            id: "algebraic-like-terms",
            name: "Combining Like Terms",
            formula: "ax + bx = (a + b)x",

            terms: [
                "a, b = numerical coefficients",
                "x = common variable"
            ],

            example: {
                question: "Simplify 3x + 5x",
                solution: "(3 + 5)x = 8x",
                answer: "8x"
            },

            note: "Only like terms can be directly combined."
        },


        /* -------------------------------------------------
           29. DISTRIBUTIVE LAW
        ------------------------------------------------- */

        {
            id: "distributive-law",
            name: "Distributive Law",
            formula: "a(b + c) = ab + ac",

            terms: [
                "a, b, c = algebraic quantities"
            ],

            example: {
                question: "Expand 3(x + 4)",
                solution: "3x + 12",
                answer: "3x + 12"
            },

            note: "Multiply the quantity outside the bracket by every term inside."
        },


        /* -------------------------------------------------
           30. COMMON FACTOR
        ------------------------------------------------- */

        {
            id: "common-factor",
            name: "Taking a Common Factor",
            formula: "ab + ac = a(b + c)",

            terms: [
                "a = common factor",
                "b, c = remaining factors"
            ],

            example: {
                question: "Factorise 6x + 12",
                
