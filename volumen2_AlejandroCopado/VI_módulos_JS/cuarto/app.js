function loadOperations(params) {
    import("./mathOperations.js").then(module => {
        const { add, subtrack, multiply } = module;

        console.log("Sum -> ", add(21, 2432));
        console.log("Resta -> ", subtrack(1000, 31));
        console.log("Multiplicación -> ", multiply(12, 2));
    });
}

loadOperations();