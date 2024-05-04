window.onload = function () {
  const controller = new AbortController();
  // Set the date we're counting down to
  const countDownDate = new Date("May 10, 2024 08:00:00").getTime();
  const clockDaysElement = document.getElementById("days");
  const clockHoursElement = document.getElementById("hours");
  const clockMinutesElement = document.getElementById("minutes");
  const clockSecondsElement = document.getElementById("seconds");

  // Create an animation callback every second:
  animationInterval(1000, controller.signal, (time) => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    clockDaysElement.textContent = days;
    clockHoursElement.textContent = hours;
    clockMinutesElement.textContent = minutes;
    clockSecondsElement.textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      controller.abort();
      document.querySelector(".time-blocks").innerHTML = "EXPIRED";
    }
  });
};

function animationInterval(ms, signal, callback) {
  // Prefer currentTime, as it'll better sync animtions queued in the
  // same frame, but if it isn't supported, performance.now() is fine.
  const start = document.timeline
    ? document.timeline.currentTime
    : performance.now();

  function frame(time) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}




