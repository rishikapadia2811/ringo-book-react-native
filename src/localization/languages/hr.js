import allStrings from './allStrings';

const languageKeyArr = Object.keys(allStrings);

const hebrew = () => {
  const obj = {}
  languageKeyArr.map((item) => {
    obj[item] = allStrings[item].iw
    return true;
  })
  return obj;
}

export default hebrew();
