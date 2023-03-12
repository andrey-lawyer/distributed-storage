export const maxLatency = (
  count,
  latencyLarge,
  latencyMedium,
  latencySmall
) => {
  let max = 0;
  if (!!count) {
    if (count === 3) {
      max = Math.max(latencyLarge, latencyMedium, latencySmall);
    } else if (count === 2 || count === 3) {
      max = Math.max(latencyMedium, latencySmall);
    } else max = latencySmall;
  }
  return max;
};
