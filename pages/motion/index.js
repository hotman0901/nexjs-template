import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const WGContainer = styled.div`
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const WGSwitch = styled.div`
  width: 160px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};

  .handle {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 40px;
  }
`;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const Motion = function () {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <WGContainer>
      <WGSwitch className="switch" isOn={isOn} onClick={toggleSwitch}>
        {/* 要使用 layout 這個參數 轉換的 style 才會順暢 */}
        <motion.div className="handle" layout transition={spring} />
      </WGSwitch>
    </WGContainer>
  );
};

Motion.getInitialProps = async ({ locale }) => ({
  messages: {
    ...require(`@i18n/shared/${locale}.json`),
    ...require(`@i18n/index/${locale}.json`),
  },
});

export default Motion;
