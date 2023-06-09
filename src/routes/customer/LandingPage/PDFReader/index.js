import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import pianoPDF from './../../../../assets/PianistMustHaves.pdf'

import '@react-pdf-viewer/core/lib/styles/index.css'

const PDFReader = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '600px',
          width: 'auto'
        }}
      >
        <Viewer fileUrl={pianoPDF} />
      </div>
    </Worker>
  )
}

export default PDFReader
