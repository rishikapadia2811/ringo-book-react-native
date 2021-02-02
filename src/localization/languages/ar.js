import allStrings from './allStrings';

const languageKeyArr = Object.keys(allStrings);

const arabic = () => {
  const obj = {}
  languageKeyArr.map((item) => {
    obj[item] = allStrings[item].ar
    return true;
  })
  return obj;
}

export default arabic();
