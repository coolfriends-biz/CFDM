import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Showcase from './showcase/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Showcase />
  </StrictMode>,
)
