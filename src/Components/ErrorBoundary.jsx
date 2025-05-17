import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  // This lifecycle method catches JavaScript errors in the child components.
  componentDidCatch(error, errorInfo) {
    // Update state to indicate an error has occurred
    this.setState({
      hasError: true,
      errorInfo: errorInfo
    });

    // Optionally log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    // If there is an error, render a fallback UI
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            <summary>Click for more details</summary>
            <pre>{this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    // Otherwise, render the children components as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
