/**
 * @description 用來刪除期號有年月日8碼
 *
 * @param {*} str
 * @returns
 */
export const splitIssueDate = str => {
  // 大於8碼
  if (str && str.length > 8) {
    return str.substr(8);
  }
  return str;
};

/**
 * @description 補0功能
 *
 * @param {number} o 數字
 * @param {number} size 總共幾位
 * @returns
 */
export const preZeroFill = (o, size) => {
  try {
    const num = Number(o);
    // eslint-disable-next-line no-restricted-properties
    if (num >= Math.pow(10, size)) {
      // 如果num本身位数不小于size位
      return num.toString();
    }
    const _Str = Array(size + 1).join('0') + num;
    return _Str.slice(_Str.length - size);
  } catch (error) {
    return o.toString();
  }
};
