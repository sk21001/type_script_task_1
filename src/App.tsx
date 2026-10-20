import UserDetails from "./components/UserDetails"
import {ErrorBoundary,type FallbackProps} from 'react-error-boundary'

const App = () => {

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error instanceof Error ? error.message : String(error)}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <UserDetails/>
    </ErrorBoundary>
 
  )
}

export default App