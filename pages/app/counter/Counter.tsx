import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();


  return (
    <div>
      <div >
        <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
 
    </div>
  );
}
