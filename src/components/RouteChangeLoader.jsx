import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export default function RouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // simulate loading

    return () => clearTimeout(timer);
  }, [location]);

  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-white/70 flex items-center justify-center">
        <HashLoader color="#25eb71ff" size={60} />
      </div>
    )
  );
}
