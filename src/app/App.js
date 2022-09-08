import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// Features
// import { TodosExample } from 'features/todos'
// import { CounterExample } from 'features/counter'
// import { UsersExample } from 'features/users'


// Main Pages
import { Main } from '../pages/main'

// member Pages
import { Login } from '../pages/members/login'
import { SignUp } from '../pages/members/sign-up'
import { Profile } from '../pages/members/profile'

// Product Pages

import 'swiper/swiper-bundle.css';


const App = () => {
  return (
    <BrowserRouter>
        {/* 조건에 맞게 렌더링 시켜줄 조건  */}
        <Routes>

          <Route path="/" element={<Main/>}></Route>
          

          <Route path="/sign-in" element={<Login/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          
          
          


          // 권한이 필요한 라우팅
          {/* <PrivateRoute exact path="/">
            <Stack spacing={{ base: 6, lg: 8 }}>
              <VerifiedUser>
                <TodosExample />
              </VerifiedUser>

              <CounterExample />
              <UsersExample />
            </Stack>
          </PrivateRoute>  */}
          {/* <PrivateRoute exact path="/settings" element={Settings}/> */}
          
        </Routes>
    </BrowserRouter>
  )
}

export default App