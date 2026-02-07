import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { TutorsPage } from './pages/TutorsPage';
import { ContactPage } from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CourseDetailsPage,
});

const tutorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tutors',
  component: TutorsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  tutorsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
