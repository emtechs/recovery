import { Route, Routes } from 'react-router-dom'
import { PasswordPage } from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:userId/:token" element={<PasswordPage />} />
    </Routes>
  )
}

export default AppRoutes
