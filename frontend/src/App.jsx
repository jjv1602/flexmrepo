import { Suspense } from 'react'
import './App.css'
import Loader from './Components/Loader/Loader';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import HomePg from './Components/HomePg/HomePg';
import GalleryPg from './Components/GalleryPg/GalleryPg';
import PlansPg from './Components/PlansPg/PlansPg';
import TrainerPg from './Components/TrainerPg/TrainerPg';
import LoginPg from './Components/AuthPg/LoginPg';
import RegisterPg from './Components/AuthPg/RegisterPg';
import { ChakraProvider } from '@chakra-ui/react'
import ProfilePg from './Components/ProfilePg/ProfilePg';
function App() {

  return (
    <ChakraProvider>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Login and Register Route */}
          <Route path="/login" element={<LoginPg/>} />
          <Route path="/register" element={<RegisterPg />} />
          <Route path="/" element={<HomePg/>}/>
          <Route path="/gallery" element={<GalleryPg/>}/>
          <Route path="/plans" element={<PlansPg/>}/>
          <Route path="/trainers" element={<TrainerPg/>}/>
          <Route path="/profile" element={<ProfilePg/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
