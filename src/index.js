import _ from 'lodash';

const searchForDifference = (data1, data2) => {
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])];
  const sortedKeys = _.sortBy(keys);
  const result = [];
  for (const key of sortedKeys) {
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push(`${key}: ${data1[key]}`);
      } else {
        result.push(`- ${key}: ${data1[key]}`);
        result.push(`+ ${key}: ${data2[key]}`);
      }
    } else if (Object.hasOwn(data1, key)) {
        result.push(`- ${key}: ${data1[key]}`);
    } else if (Object.hasOwn(data2, key)) {
        result.push(`+ ${key}: ${data2[key]}`);
    }
  }
  return `{${'\n'}${result.join(',\n')}${'\n'}}`;
};

export { searchForDifference };
