import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadPDFButton = () => {
  const downloadPDF = () => {
    const element = document.documentElement;
    const options = {
      margin: 0.5,
      filename: 'downloaded.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <button onClick={downloadPDF} className="btn btn-primary mx-auto fw-bold">
      Descargar PDF
    </button>
  );
};

export default DownloadPDFButton;
