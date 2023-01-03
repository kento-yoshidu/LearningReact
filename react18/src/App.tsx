import React, { Suspense } from 'react';

import Transition from './components/Transition';
import ReactQuery from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <Transition />

      <hr />

      <ErrorBoundary fallback={<p>エラーです。</p>}>
        <Suspense fallback={<p>ローディング中です。</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
