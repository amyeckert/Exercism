// Given a moment, determine the moment that would be after a gigasecond has passed.
// A gigasecond is 10^9 (1,000,000,000) seconds.
// A millisecond is 1 ms = 0.001 s.

export const gigasecond = (moment) => {
    const convertGigasecondToMillisecond = 1000000000 / 0.001;
    let addInterval = (moment.getTime() + (convertGigasecondToMillisecond));

    return new Date(addInterval);
};

