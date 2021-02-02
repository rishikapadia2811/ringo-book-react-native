import allStrings from './allStrings';

const languageKeyArr = Object.keys(allStrings);

const english = () => {
  const obj = {}
  languageKeyArr.map((item) => {
    obj[item] = allStrings[item].en
    return true;
  })
  return obj;
}

export default english();
