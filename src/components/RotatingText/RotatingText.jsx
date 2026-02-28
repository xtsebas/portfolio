import React, { useState, useEffect } from 'react';
import './RotatingText.css';

const WORDS = ['Full Stack', 'Software', 'Backend', 'AI and LLM'];
const DIRS  = ['up', 'right', 'down', 'left'];

const PAUSE = 2800; // ms between transitions
const ANIM  = 480;  // ms for the animation itself

export default function RotatingText() {
  const [curr,   setCurr]   = useState(0);
  const [dirIdx, setDirIdx] = useState(0);
  const [phase,  setPhase]  = useState('idle'); // 'idle' | 'out'

  // State machine:
  //  idle → (after PAUSE) → out
  //  out  → (after ANIM)  → update curr/dir → idle
  useEffect(() => {
    const id = setTimeout(() => {
      if (phase === 'idle') {
        setPhase('out');
      } else {
        setCurr(c => (c + 1) % WORDS.length);
        setDirIdx(d => (d + 1) % 4);
        setPhase('idle');
      }
    }, phase === 'idle' ? PAUSE : ANIM);

    return () => clearTimeout(id);
  }, [phase]);

  const dir     = DIRS[dirIdx];
  const nextIdx = (curr + 1) % WORDS.length;

  return (
    <span className="rt-container">
      {/* Invisible sizer — keeps the container at a stable width */}
      <span className="rt-sizer" aria-hidden="true">AI and LLM</span>

      {/* Current word — exits when phase === 'out' */}
      <span className={`rt-word${phase === 'out' ? ` rt-exit-${dir}` : ''}`}>
        {WORDS[curr]}
      </span>

      {/* Next word — enters only during 'out' phase */}
      {phase === 'out' && (
        <span className={`rt-word rt-enter-${dir}`}>
          {WORDS[nextIdx]}
        </span>
      )}
    </span>
  );
}
