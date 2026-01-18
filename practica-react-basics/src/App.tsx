import { Layout } from '@core/components/layout/layout'
import { Outlet } from 'react-router'

import './App.css'


export const App: React.FC =() => {
  const apptitle = ''
  const subTitle = ''



  return (
    <Layout 
    Title={apptitle}
    subTitle={subTitle}
    >
      <Outlet/>
    </Layout>
  )
}

export default App
