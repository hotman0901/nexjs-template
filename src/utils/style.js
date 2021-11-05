/**
 * @description styled-component 參數共用方法，有需要自己的style再從這邊加上判斷
 *
 * @param {*} props
 * @returns String
 */
export const combinedStyle = props => {
  const {
    padding,
    height,
    margin,
    bgColor,
    width,
    minHeight,
    justifyContent,
    flexDirection,
    color,
    border,
    fontSize,
    maxWidth,
    minWidth,
    alignItems,
    alignSelf,
    flexWrap,
    textAlign,
    cursor,
    flex,
    display,
    whiteSpace,
    bottom,
    fontWeight,
    maxHeight,
    paddingLeft,
    paddingRight,
    opacity,
    top,
  } = props;

  let styleList = '';

  if (top) {
    styleList = styleList.concat(`top: ${top};`);
  }

  if (opacity) {
    styleList = styleList.concat(`opacity: ${opacity};`);
  }

  if (minHeight) {
    styleList = styleList.concat(`min-height: ${minHeight};`);
  }

  if (padding) {
    styleList = styleList.concat(`padding: ${padding};`);
  }

  if (paddingLeft) {
    styleList = styleList.concat(`padding-left: ${paddingLeft};`);
  }

  if (paddingRight) {
    styleList = styleList.concat(`padding-right: ${paddingRight};`);
  }

  if (margin) {
    styleList = styleList.concat(`margin: ${margin};`);
  }

  if (height) {
    styleList = styleList.concat(`height: ${height};`);
  }

  if (width) {
    styleList = styleList.concat(`width: ${width};`);
  }

  if (bgColor) {
    styleList = styleList.concat(`background-color: ${bgColor};`);
  }

  if (justifyContent) {
    styleList = styleList.concat(`justify-content: ${justifyContent};`);
  }

  if (flexDirection) {
    styleList = styleList.concat(`flex-direction: ${flexDirection};`);
  }

  if (color) {
    styleList = styleList.concat(`color: ${color};`);
  }

  if (border) {
    styleList = styleList.concat(`border: ${border};`);
  }

  if (fontSize) {
    styleList = styleList.concat(`font-size: ${fontSize};`);
  }

  if (maxWidth) {
    styleList = styleList.concat(`max-width: ${maxWidth};`);
  }

  if (minWidth) {
    styleList = styleList.concat(`min-width: ${minWidth};`);
  }

  if (alignItems) {
    styleList = styleList.concat(`align-items: ${alignItems};`);
  }

  if (alignSelf) {
    styleList = styleList.concat(`align-self: ${alignSelf};`);
  }

  if (flexWrap) {
    styleList = styleList.concat(`flex-wrap: ${flexWrap};`);
  }

  if (textAlign) {
    styleList = styleList.concat(`text-align: ${textAlign};`);
  }

  if (cursor) {
    styleList = styleList.concat(`cursor: ${cursor};`);
  }

  if (flex) {
    styleList = styleList.concat(`flex: ${flex};`);
  }

  if (display) {
    styleList = styleList.concat(`display: ${display};`);
  }

  if (whiteSpace) {
    styleList = styleList.concat(`white-space: ${whiteSpace};`);
  }

  if (bottom) {
    styleList = styleList.concat(`bottom: ${bottom};`);
  }

  if (fontWeight) {
    styleList = styleList.concat(`font-weight: ${fontWeight};`);
  }

  if (maxHeight) {
    styleList = styleList.concat(`max-height: ${maxHeight};`);
  }

  if (styleList === '') {
    return null;
  }

  return styleList;
};
