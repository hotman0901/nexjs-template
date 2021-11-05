const basicStyle = (flex, fontSize, justifyContent, options) => `
  display: flex;
  align-items: start;
  div {
    font-size: ${fontSize};
    position: relative;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
      flex: ${flex[0]};
    }
    &:nth-child(2) {
      flex: ${flex[1]};
      justify-content: ${justifyContent};
      & > div {
        display: flex;
        flex: none;
        width: 93%;
        margin: auto;
        flex-wrap: wrap;
      }
      & > span {
        margin-right: 0px;
      }
    }  
    &:nth-child(3) {
      flex: ${flex[2]};
    }
    &:nth-child(4) {
      flex: ${flex[3]};
    }
    ${options}
  }
`;

const media530start =
  '&:nth-child(2){@media screen and (max-width: 530px){justify-content: start; padding-left: 3%;}}';

const media374start =
  '&:nth-child(2){@media screen and (max-width: 374px){justify-content: start; padding-left: 3%;}}';
const media450center =
  '&:nth-child(2){@media screen and (min-width: 450px){justify-content: center;}}';
const ballWidth = width =>
  `&>div{&:nth-child(2){  &>span{ width: ${width}px; } }}`;

export const columnStyles = [
  {
    numbers: 1,
    digit: 1,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 3,
    digit: true,
    fontSize: '14px',
    style: 'testing style',
  },
  {
    numbers: 5,
    digit: true,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 6,
    digit: true,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 7,
    digit: 1,
    fontSize: '14px',
    style: basicStyle([1, 3, 0.6, 0.6], '14px', 'center', media374start),
  },
  {
    numbers: 7,
    digit: 2,
    fontSize: '15px',
    style: basicStyle([1, 3, 0.6, 0.7], '14px', 'center', media374start),
  },
  {
    numbers: 8,
    digit: 1,
    fontSize: '14px',
    style: basicStyle([1, 2.5, 0.6, 0.6], '14px', 'center', media374start),
  },
  {
    numbers: 12,
    digit: 1,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 14,
    digit: 1,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 18,
    digit: true,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 24,
    digit: true,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 1,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 3,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 5,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 6,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 7,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 8,
    digit: 2,
    fontSize: '14px',
    style:
      basicStyle(
        [0.6, 3, 0.6, 0.6],
        '14px',
        'start',
        `&:nth-child(2){padding-left: 3%; &>span{width: 21px; }`
      ) + media450center,
  },
  {
    numbers: 12,
    digit: 2,
    fontSize: '14px',
    style:
      basicStyle([1, 2, 0.8, 0.8], '14px', 'center', media374start) +
      ballWidth(22),
  },
  {
    numbers: 14,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 18,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 24,
    digit: false,
    fontSize: '14px',
    style: '',
  },
  {
    numbers: 1,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1.2, 1.2, 1, 1], '15px', 'center', ''),
  },
  {
    numbers: 3,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1, 1.2, 0.6, 0.6], '15px', 'center', '') + ballWidth(25),
  },
  {
    numbers: 5,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1.5, 2, 1, 1], '15px', 'center', media374start),
  },
  {
    numbers: 6,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 7,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 8,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 12,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 14,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 14,
    digit: 2,
    fontSize: '15px',
    style: basicStyle([1, 3, 0.6, 0.6], '15px', 'center', media530start),
  },
  {
    numbers: 18,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 24,
    digit: true,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 1,
    digit: 2,
    fontSize: '15px',
    style: basicStyle([1.2, 1.2, 1, 1], '15px', 'center', ''),
  },
  {
    numbers: 3,
    digit: 2,
    fontSize: '15px',
    style: basicStyle([1, 1.2, 0.6, 0.6], '15px', 'center', '') + ballWidth(25),
  },
  {
    numbers: 5,
    digit: 2,
    fontSize: '15px',
    style: basicStyle([1.5, 2, 1, 1], '15px', 'center', media374start),
  },
  {
    numbers: 6,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1.5, 2.5, 0.8, 0.8], '15px', 'center', media374start),
  },
  {
    numbers: 7,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1.2, 3, 0.6, 0.8], '15px', 'center', media374start),
  },
  {
    numbers: 8,
    digit: 1,
    fontSize: '15px',
    style: basicStyle([1, 3, 0.6, 0.6], '15px', 'center', media374start),
  },
  {
    numbers: 12,
    digit: false,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 14,
    digit: false,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 18,
    digit: false,
    fontSize: '15px',
    style: '',
  },
  {
    numbers: 24,
    digit: 2,
    fontSize: '14px',
    style: 'basicStyleSec',
  },
  {
    numbers: 1,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 3,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 5,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 6,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 7,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 8,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 12,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 14,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 18,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 24,
    digit: true,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 1,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 3,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 5,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 6,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 7,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 8,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 12,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 14,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 18,
    digit: false,
    fontSize: '17px',
    style: '',
  },
  {
    numbers: 24,
    digit: false,
    fontSize: '17px',
    style: '',
  },
];

export function fitStyle(condition) {
  const result = columnStyles.find(
    content =>
      content.numbers === condition.numbers &&
      content.digit === condition.digit &&
      content.fontSize === condition.fontSize
  );
  if (result?.style) {
    return result;
  }
  return null;
}
