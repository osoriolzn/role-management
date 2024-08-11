import Home from '../home'
import Login from '../login'
import NotFound from '../not-found'

import Layout from "../../components/layout"

function App() {
  return (
    <Layout>
      <Home />
      <Login />
      <NotFound />
    </Layout>
  )
}

export default App
