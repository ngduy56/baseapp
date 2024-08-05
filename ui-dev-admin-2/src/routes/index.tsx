import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Loading from 'common/components/Loading';
import { theme } from 'themes/MainTheme';
import ProtectedRoute from 'routes/ProtectedRoute';
import { siteMap } from 'routes/AppMainSiteMap';

const Account = lazy(() => import('layouts/AccountLayout'));
const FormLogin = lazy(
  () => import('features/Authentication/components/Login/FormLogin')
);
const MainLayout = lazy(() => import('layouts/MainLayout'));
const MainApp = lazy(() => import('common/components/MainApp'));

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/account" element={<Account />}>
          <Route path="login" element={<FormLogin />} />
        </Route>
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <ThemeProvider theme={theme}>
                <MainLayout>
                  <MainApp />
                </MainLayout>
              </ThemeProvider>
            </ProtectedRoute>
          }
        >
          <Route path="main" element={<MainApp />}>
            {siteMap.map((item, index) => {
              const Component = item.component;
              return (
                <Route key={index} path={item.path} element={<Component />}>
                  {item?.childComponents?.map((child, index) => {
                    const ChildComponent = child.component;
                    return (
                      <Route
                        key={index}
                        path={child.path}
                        element={<ChildComponent />}
                      />
                    );
                  })}
                </Route>
              );
            })}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
