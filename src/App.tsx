import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import ProjectLazurus from './pages/ProjectLazurus'
import ProjectRaizesgo from './pages/ProjectRaizesgo'
import ProjectDetail from './pages/ProjectDetail'
import Layout from './components/Layout'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/projetos/lazurus" element={<ProjectLazurus />} />
          <Route path="/projetos/raizesgo" element={<ProjectRaizesgo />} />
          <Route path="/projetos/:projectId" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
