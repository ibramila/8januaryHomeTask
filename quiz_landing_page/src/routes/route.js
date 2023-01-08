import About from "../pages/About";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]