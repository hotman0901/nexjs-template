import is from 'is_js';

// 字串判斷定義
export const str = {
  // 是否為空值
  isNotEmpty(o) {
    if (
      is.undefined(o) ||
      is.null(o) ||
      is.not.string(o) ||
      is.empty(o) ||
      o.length === 0
    ) {
      return false;
    }
    return true;
  },
};
