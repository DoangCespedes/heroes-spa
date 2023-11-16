import {Route, Routes} from 'react-router-dom'
import { MarvelPage, DCPages, HeroesRoutes} from '../heroes'
import { Login } from '../auth/pages/Login'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/*" element={<HeroesRoutes/>} />
      </Routes>
    </>
  )
}
