function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2)) {
    if (timeRange1[0] < timeRange2[0] && timeRange1[1] < timeRange2[0] ||
      timeRange1[0] > timeRange2[0] && timeRange2[1] < timeRange1[0]) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
