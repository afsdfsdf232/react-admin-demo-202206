import { HashRouter, Routes, Route  } from 'react-router-dom'
import Login from '@/pages/Login/index'
import Layout from '@/pages/Layout'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* 路由 */}
          <Route path='/' element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
