import React from 'react'
import { googleLogout } from '@react-oauth/google'
import BarChart from './BarChart'
import 'react-dropzone-uploader/dist/styles.css'
import { Button } from 'react-bootstrap'

const LandingPage = () => {
  // const [, data] = useContext(AuthContext);
  // const { email } = data?.dataAuth || {};

  return (
    <div>
      WELCOME BACK
      <Button onClick={() => googleLogout() }>Log out</Button>
      {/* <Uploader />     */}
      {/* <LightBox /> */}
      {/* <PDFReader /> */}
      <BarChart />
    </div>
  )
}

export default LandingPage
