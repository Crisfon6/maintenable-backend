export const regexQuery = (queryRaw: any) => {
  let query: any = {};
  Object.keys(queryRaw).forEach((key: any) => {
    query[key] = [];
    queryRaw[key].forEach((arr: any) => {
      const keyIn = Object.keys(arr)[0];
      const reg = new RegExp(String(arr[keyIn]), "i");
      let processQ = { [keyIn]: reg };
      query[key].push(processQ);
    });
  });
  return query;
};
