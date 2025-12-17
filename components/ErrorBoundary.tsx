import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Production-ready Error Boundary Component
 * Catches React errors and displays user-friendly fallback UI
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to monitoring service in production
    if (import.meta.env.PROD) {
      // Add error reporting service here (e.g., Sentry, LogRocket)
      // errorReportingService.log(error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground">
              We're sorry for the inconvenience. Please try refreshing the page or return to the homepage.
            </p>
            {!import.meta.env.PROD && this.state.error && (
              <div className="mt-4 p-4 bg-destructive/10 rounded-lg text-left">
                <p className="text-sm font-mono text-destructive break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            <div className="flex gap-4 justify-center">
              <Button onClick={() => window.location.reload()} variant="outline">
                Refresh Page
              </Button>
              <Button onClick={this.handleReset}>
                Go to Homepage
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
