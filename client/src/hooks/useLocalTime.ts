import { useEffect, useState } from 'react';

export function useLocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () => {
      const now = new Date();
      setTime(
        now.toLocaleString('en-IN', {
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      );
    };
    format();
    const id = window.setInterval(format, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
