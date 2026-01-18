import { Layout } from '@core/components/layout/layout'
import { Outlet } from 'react-router'

import './App.css'


export const App: React.FC =() => {
  const apptitle = 'React Basics Project'
  const subTitle = 'Gestión de items del Menú'



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
