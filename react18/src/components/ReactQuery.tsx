import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import TodoList from "./TodoList"
import Sidebar from "./Sidebar"
import AlbumList from './AlbumList'

const ReactQuery = () => {
  return (
    <div style={{ "display": "flex", "padding": "16px" }}>
      <Sidebar />

      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<p>リストエラーです。</p>}>
          <Suspense fallback={<p>ローディング中です。</p>}>
            <AlbumList />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<p>リストエラーです。</p>}>
          <Suspense fallback={<p>ローディング中です。</p>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default ReactQuery
