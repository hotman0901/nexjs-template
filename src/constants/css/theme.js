// 共用 css 參數
export const themeDefault = {
  fontColor: `#000`,
  row: {
    lastChildMargin: '15px',
  },
  padding: '10px',
  accordion: {
    header: {
      height: '44px',
    },
  },
  // 背景漸層
  bgGradient: {
    menu: `
      linear-gradient(
        0deg,
        rgba(15, 6, 82, 1) 0%,
        rgba(108, 0, 75, 1) 100%
      )
    `,
    accordion: `
      linear-gradient(
        90deg,
        rgba(198, 35, 20, 1) 0%,
        rgba(198, 36, 45, 1) 37%,
        rgba(183, 4, 78, 1) 56%,
        rgba(133, 5, 150, 1) 100%
      )
    `,
    header: `
      linear-gradient(
        90deg,
        rgba(255, 88, 0, 1) 0%,
        rgba(255, 101, 101, 1) 37%,
        rgba(255, 64, 115, 1) 56%,
        rgba(193, 38, 203, 1) 100%
      )
    `,
  },
};
