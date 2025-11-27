import React, { useEffect } from 'react';

const Insta = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/embed-lite.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        id="taggbox-widget"
        className="taggbox"
        style={{ width: '100%', height: '100%' }}
        data-widget-id="2148216"
        data-tags="false"
      ></div>
    </div>
  );
};

export default Insta;