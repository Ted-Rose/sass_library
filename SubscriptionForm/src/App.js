import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubscribeToNewsletter from "./pages/SubscribeToNewsletter.js";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <SubscribeToNewsletter /> },
            // { path: "/thank_you", element: <ThankYou /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
