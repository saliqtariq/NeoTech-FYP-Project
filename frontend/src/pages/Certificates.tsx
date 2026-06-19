import React from 'react';
import CertificatesSection from '@/components/CertificatesSection';
import { Helmet } from 'react-helmet-async';

const CertificatesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Certificates | Neotech Solutions</title>
        <meta name="description" content="View and download course completion certificates provided by Neotech Solutions." />
      </Helmet>
      <CertificatesSection />
    </div>
  );
};

export default CertificatesPage;
