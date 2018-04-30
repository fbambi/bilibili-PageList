export default search => {
  const result = search
    .slice(1)
    .split("&")
    .reduce((obj, pair) => {
      const [key, value] = pair.split("=");
      return {
        ...obj,
        [key]: value
      };
    }, {});

  return result;
};
