import './PDFViewer.css';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

export default function PDFViewer({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1); // reset to page 1 on load
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading="Loading PDF..."
                onLoadError={console.error}
            >
                <Page pageNumber={pageNumber} />
            </Document>

            <div className="flex items-center space-x-4 mt-4">
                <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1}>
                     ‹ Prev
                </button>
                <span>
                    Page {pageNumber} of {numPages}
                </span>
                <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}>
                    Next ›
                </button>
            </div>
        </div>
    );
}
