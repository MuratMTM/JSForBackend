function createLoginTracker() {
    let loginCount = 0;
    return {
        increment: () => { loginCount++; },
        getCount: () => { console.log(`Total Login Count:${loginCount}`); },
        reset: () => { loginCount = 0; }
    };
}

const tracker = createLoginTracker();
tracker.increment();
tracker.increment();
tracker.increment();
tracker.getCount();
tracker.reset();
tracker.getCount();

console.log(tracker.loginCount); // controlling of outside access