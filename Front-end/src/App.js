import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import P1 from './dir/P1'
import P2 from './dir/P2'
import P3 from './dir/P3'
import P4 from './dir/P4'
import P5 from './dir/P5'
import P6 from './dir/P6'
import P7 from './dir/P7'
import './style.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P1 />} />
          <Route path='/:id1' element={<P2 />} />
          <Route path='/:id1/:id2' element={<P3 />} />
          <Route path='/:id1/:id2/:id3' element={<P4 />} />
          <Route path='/:id1/:id2/:id3/:id4' element={<P5 />} />
          <Route path='/:id1/:id2/:id3/:id4/:id5' element={<P6 />} />
          <Route path='/:id1/:id2/:id3/:id4/:id5/:id6' element={<P7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App