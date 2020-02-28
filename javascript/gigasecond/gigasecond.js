// Given a moment, determine the moment that would be after a gigasecond has passed.
// A gigasecond is 10^9 (1,000,000,000) seconds.

// export 
const gigasecond = () => {
    let now = Date.now();
    let moment = new Date();
    moment.setHours(0,0,0,0); // midnight
    let midnight = moment;
    // console.log(now);

    console.log(midnight);

};

gigasecond();