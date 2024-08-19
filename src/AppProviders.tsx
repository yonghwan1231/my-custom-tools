import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { errorHandler } from '@hooks'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: (error) => {
            errorHandler(error)
          },
        },
      },
      queryCache: new QueryCache({
        onError: errorHandler,
        onSuccess: () => {},
      }),
    }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ErrorBoundary fallback={<div>이용에 불편을 드려 죄송.</div>}>
            <Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
