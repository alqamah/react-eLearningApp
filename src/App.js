import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Page404 from "./pages/misc/Page404/Page404"
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Hero />
        },
        {
          path: "/courses",
          children: [
            {
              index: true,
              element: <Courses />
            },
            {
              path: ":id",
              children: [
                {
                  index: true,
                  element: <Details />
                },
                {
                  path: "chapter",
                  element: <Learn />,
                  children: [
                    {
                      path: ":chapterId",
                      element: <Chapter/>
                    }
                  ]
                }
              ]
            }
          ]
        }

      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
