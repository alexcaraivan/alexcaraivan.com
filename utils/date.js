export const formatDate = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

  return new Date(date).toLocaleDateString('en-US', options);
};
