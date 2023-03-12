export const toTypeVideo = latency => {
  let type;
  if (latency < 90) {
    type = '4K/2160p Ultra HD';
  } else if (latency < 220) {
    type = '1080p Full HDD';
  } else type = '480p';
  return type;
};

export const toStars = latency => {
  let count;
  if (latency < 90) {
    count = 5;
  } else if (latency < 150) {
    count = 4;
  } else if (latency < 220) {
    count = 3;
  } else if (latency < 260) {
    count = 2;
  } else count = 1;
  return count;
};
