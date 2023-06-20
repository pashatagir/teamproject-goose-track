import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

import { refreshUser } from 'redux/auth/operations';
import { selectToken } from 'redux/auth/selectors';
import { Loader } from 'utils/Loader';

const MainLayout = lazy(() => import('components/User/MainLayout'));
const Layout = lazy(() => import('utils/Layout'));
const ChoosedDay = lazy(() =>
  import('components/User/MainLayout/Calendar/ChoosedDay/ChoosedDay')
);
const ChoosedMonth = lazy(() =>
  import('components/User/MainLayout/Calendar/ChoosedMonth/ChoosedMonth')
);

const MainPage = lazy(() => import('pages/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPagePage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, token]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/calendar" component={<MainPage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/calendar"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<LoginPage />} redirectTo="/calendar" />
            }
          />
          <Route
            path="/"
            element={<PrivateRoute redirectTo="/" component={<MainLayout />} />}
          >
            <Route path="account" element={<AccountPage />} />
            <Route path="calendar" element={<CalendarPage />}>
              <Route path="day/:currentDay" element={<ChoosedDay />} />
              <Route path="month/:currentDate" element={<ChoosedMonth />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPagePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </Suspense>
  );
};
