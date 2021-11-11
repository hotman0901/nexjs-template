/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, useEffect, memo } from 'react';
import useEffectCallback from '@useHooks/useEffectCallback';
import { useCounter, useCustomCompareEffect } from 'react-use';
import isEqual from 'react-fast-compare';

const ExpensiveTree = memo(props => {
  console.log('Render ExpensiveTree');
  const { onClick } = props;
  const dateBegin = Date.now();
  // 很重的组件，不优化会死的那种，真的会死人
  while (Date.now() - dateBegin < 600) {
    //
  }

  useEffect(() => {
    console.log('Render ExpensiveTree --- DONE');
  });

  return (
    <div onClick={onClick}>
      <p>很重的组件，不优化会死的那种</p>
    </div>
  );
});

const Demo = memo(() => {
  const [count, { inc }] = useCounter(0);
  const options = { step: 1 };

  useCustomCompareEffect(
    () => {
      inc(options.step);
    },
    [options],
    (prevDeps, nextDeps) => isEqual(prevDeps, nextDeps)
  );

  return (
    <div>
      <p>useCustomCompareEffect with deep comparison: {count}</p>
    </div>
  );
});

const Index = function () {
  const [text, updateText] = useState('Initial value');
  const handleSubmit = useEffectCallback(() => {}, [text]);
  return (
    <>
      <Demo />
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onClick={handleSubmit} />
    </>
  );
};

export default Index;
