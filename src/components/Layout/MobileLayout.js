import React from 'react';
import { WGContainer, WGScroll } from '@widgets/div';
import PropTypes from 'prop-types';

/**
 * @description mobile layout 用，分 header content footer
 *
 * @param {*} { header, content, footer }
 */
const MobileLayout = function ({ header, content, footer }) {
  return (
    <WGContainer>
      {header()}
      <WGScroll>{content()}</WGScroll>
      {footer()}
    </WGContainer>
  );
};

MobileLayout.defaultProps = {
  header: () => {},
  content: () => {},
  footer: () => {},
};

MobileLayout.propTypes = {
  header: PropTypes.func,
  content: PropTypes.func,
  footer: PropTypes.func,
};

export default MobileLayout;
