const listNames = (pPersonList) => {
  let template = pPersonList.map((person, index) => {
    return index + 1 + ". " + person;
  });

  return template;
};

export { listNames };
