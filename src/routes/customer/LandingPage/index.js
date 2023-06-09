import React from 'react'
import BarChart from './BarChart'
import 'react-dropzone-uploader/dist/styles.css'

const LandingPage = () => {
  // const [, data] = useContext(AuthContext);
  // const { email } = data?.dataAuth || {};

  return (
    <div>
      WELCOME BACK
      {/* <Uploader />     */}
      {/* <LightBox /> */}
      {/* <PDFReader /> */}
      <BarChart />
    </div>
  )
}

export default LandingPage
