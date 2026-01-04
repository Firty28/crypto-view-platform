import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ChartPage } from "../pages/chart"
import "./styles/global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const quertyClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={quertyClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChartPage/>
    </QueryClientProvider>
  )
}

export default App
