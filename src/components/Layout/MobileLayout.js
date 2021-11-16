import { WGContainer, WGScroll } from '@widgets/div';
import { NavBar, Skeleton } from 'react-vant';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
/**
 * @description mobile layout 用，分 header content footer
 *
 * @param {*} { header, content, footer, loading }
 */
const MobileLayout = function ({ header, content, footer, loading }) {
  return (
    <AnimatePresence>
      {loading ? (
        <WGContainer>
          <NavBar title="Loading" />
          <WGScroll
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="loading"
          >
            <br />
            <Skeleton rowHeight={20} />
            <br />
            <Skeleton rowHeight={20} />
            <br />
            <Skeleton rowHeight={20} />
            <br />
            <Skeleton rowHeight={20} />
            <br />
            <Skeleton rowHeight={20} />
          </WGScroll>
          <div />
        </WGContainer>
      ) : (
        <WGContainer>
          {header}
          <WGScroll
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="container"
          >
            {content}
          </WGScroll>
          {footer}
        </WGContainer>
      )}
    </AnimatePresence>
  );
};

MobileLayout.defaultProps = {
  header: null,
  content: null,
  footer: null,
  loading: false,
};

MobileLayout.propTypes = {
  header: PropTypes.element,
  content: PropTypes.element,
  footer: PropTypes.element,
  loading: PropTypes.bool,
};

export default MobileLayout;
