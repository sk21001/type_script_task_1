import UserDetails from "./components/UserDetails"
import {ErrorBoundary,type FallbackProps} from 'react-error-boundary'

const App = () => {

const FallbackUiComponent = ({error,resetErrorBoundary,}:FallbackProps) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error instanceof Error && error.message }</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

  return (
    <ErrorBoundary FallbackComponent={FallbackUiComponent} >
      <UserDetails/>
    </ErrorBoundary>
 
  )
}

export default App