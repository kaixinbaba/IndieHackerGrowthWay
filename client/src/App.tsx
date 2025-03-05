import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/LanguageContext";
import Home from "@/pages/home";

function Router() {
  // 使用环境变量中的 BASE_URL 作为路由的基础路径
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <Switch base={base}>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;