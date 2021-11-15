import { motion, useTransform, useMotionValue } from 'framer-motion';

const Example = function () {
  const blockVariants = {
    initial: {
      rotate: 0,
      x: 100,
    },
    target: {
      rotate: 360,
      x: 500,
    },
  };

  const rotate = useMotionValue(0);

  const x = useMotionValue(0);
  /**
   * Here we tie together the value of "scale" to the value
   * of "rotate"
   * The scale will increase along the rotation, from 0
   * until the rotation reaches 270 degrees ([0, 270])
   * where the scale property will be equal to 1 ([0, 1]).
   * The scale will stop increasing while the rotation
   * finishes its transition
   *
   * You can try to modify the values below, and see how it
   * impacts the resulting transition.
   */
  const scale = useTransform(rotate, [0, 360], [0, 1]);

  const opacity = useTransform(x, [100, 500], [0, 1]);

  setTimeout(() => {
    x.set(150);
  }, 5000);

  return (
    <motion.div
      style={{
        background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
        height: '100px',
        width: '100px',
        borderRadius: '10px',
        rotate,
        scale,
        opacity,
        x,
      }}
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: 'easeInOut',
        duration: 4,
      }}
    />
  );
};
const Motion = function () {
  return (
    <div>
      <Example />
    </div>
  );
};

Motion.getInitialProps = async ({ locale }) => ({
  messages: {
    ...require(`@i18n/shared/${locale}.json`),
    ...require(`@i18n/index/${locale}.json`),
  },
});

export default Motion;
