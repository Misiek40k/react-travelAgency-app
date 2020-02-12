export const formatTime = countdown => {
  if (countdown === null || isNaN(countdown) || countdown < 0) {
    return null;
  } else {
    let sec, min, hour;
    hour = Math.floor(countdown / (60 * 60)) + '';
    hour = hour.padStart(2, '0');

    min = Math.floor((countdown / 60) % 60) + '';

    min = min.padStart(2, '0');

    sec = (countdown % 60) + '';
    sec = sec.padStart(2, '0');

    return hour + ':' + min + ':' + sec;
  }
};
