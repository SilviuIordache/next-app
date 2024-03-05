import Script from 'next/script';
import React from 'react';

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-GJTYC4FMHM"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GJTYC4FMHM');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
