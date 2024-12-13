import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[200px] flex items-center justify-center bg-red-50 rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-red-700 mb-2">
              Une erreur est survenue
            </h2>
            <p className="text-sm text-red-600">
              {this.state.error?.message || 'Veuillez réessayer ultérieurement'}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
