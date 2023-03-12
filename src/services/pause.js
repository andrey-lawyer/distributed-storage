export const toPause = (setStateTime, pause) => {
  setTimeout(() => {
    setStateTime(true);
    // setStateLatency(false);
  }, pause * 10);
};
