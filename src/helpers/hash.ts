export interface HashParams {
  [key: string]: string,
}

export const getHashParams = () => window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial: HashParams, item) => {
    if (item) {
      const parts = item.split('=');
      return {
        ...initial,
        [parts[0]]: decodeURIComponent(parts[1]),
      };
    }
    return initial;
  }, {});
