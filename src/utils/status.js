import is from 'is_js';

export const loadErrorCode = ['1000', '1001', '1002', '1003', '9999'];

// 目前有確定的是 0000、1000
const status = [
  {
    type: 'correct',
    codes: ['0000'],
  },
  {
    type: 'loadError',
    codes: loadErrorCode,
  },
  {
    type: 'redirect',
    codes: ['0003'],
  },
];

export const checkStatus = game => {
  if (is.empty(game)) {
    return 'loading';
  }
  const { code } = game;
  const info = status.find(content => content.codes.indexOf(code) !== -1);
  return info ? info.type : 'loading';
};
