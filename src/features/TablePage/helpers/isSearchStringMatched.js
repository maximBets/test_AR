export const isSearchStringMatched = (search, ...sources) => {
  const searchString = search.toString().toLowerCase();
  return sources.some(
    (source) => source && source.toString().toLowerCase().includes(searchString)
  );
};
