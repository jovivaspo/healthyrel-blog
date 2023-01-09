const getDate = (date) => {
  const dateParse = new Date(date).toLocaleDateString();
  return dateParse;
};

export default getDate;
