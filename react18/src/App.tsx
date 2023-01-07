import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ReactQuery from './components/ReactQuery';

import Transition from './components/Transition';

function App() {
  return (
    <div className="App">
      <Transition />

      <ErrorBoundary fallback={<p>全体エラーです。</p>}>
        <Suspense fallback={<p>全体ローでイング中です。</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
