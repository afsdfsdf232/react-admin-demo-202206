import { lazy, Suspense } from 'react'
import { Routes, Route, unstable_HistoryRouter as HistoryRouter  } from 'react-router-dom'
import { history } from '@/utils'
import AuthComponent from '@/components/AuthCompontnt'
const Login = lazy(() => import('@/pages/Login/index'))
const Home = lazy(() => import('@/pages/Home/index'))
const Article = lazy(() => import('@/pages/Article/index'))
const Publish = lazy(() => import('@/pages/Publish/index'))
const Layout = lazy(() => import('@/pages/Layout/index'))

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback={
        <div style={{
          textAlign: 'center',
          marginTop: 200
        }}>
          loading...
        </div>
      }>
        <div className="App" style={{height: '100vh'}}>
          <Routes>
            {/* 路由 */}
            <Route path='/' element={   <AuthComponent> <Layout/> </AuthComponent>}>
              <Route path='/' element={ <Home/>}></Route>
              <Route path='home' element={ <Home/>}></Route>
              <Route path='article' element={ <Article/>}></Route>
              <Route path='publish' element={ <Publish/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </div>
      </Suspense>
    </HistoryRouter>
  );
}

export default App;
