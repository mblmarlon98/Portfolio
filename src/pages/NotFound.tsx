import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1>Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <div className="mt-4">
          <Link to="/" className="btn btn-white">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;

