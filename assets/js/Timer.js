window.osuny = window.osuny || {};

export default function Timer (callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        if (timerId || remaining <= 0) {
            return;
        }

        start = Date.now();

        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};