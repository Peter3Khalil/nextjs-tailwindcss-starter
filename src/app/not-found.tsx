'use client';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not found';
  }, []);
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center gap-5 bg-transparent">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
    </div>
  );
};

export default NotFound;
