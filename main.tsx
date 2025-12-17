
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Error boundary component for better error handling
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error reporting service in production
    if (import.meta.env.PROD) {
      // Add error reporting service here (e.g., Sentry)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto text-center p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize the React application with performance optimizations
const initializeApp = () => {
  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      throw new Error("Root element not found");
    }

    // Enable concurrent features for better performance
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    // Fallback error display
    document.body.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 20px;
      ">
        <div style="
          max-width: 400px;
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        ">
          <h1 style="
            font-size: 24px;
            font-weight: bold;
            color: #111827;
            margin-bottom: 16px;
          ">
            Application Error
          </h1>
          <p style="
            color: #6b7280;
            margin-bottom: 24px;
            line-height: 1.5;
          ">
            Sorry, something went wrong while loading the portfolio. Please try refreshing the page.
          </p>
          <button 
            onclick="window.location.reload()" 
            style="
              background-color: #3b82f6;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
            "
          >
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
};

// Start the application
initializeApp();
