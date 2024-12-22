export const formatMetricValue = (value, metric) => {
  if (metric === 'ctr') {
    return `${(value * 100).toFixed(2)}%`;
  }
  return value.toLocaleString();
};