import { createBrowserRouter } from "react-router"
import { AppShell } from "@/Shared/AppShell/AppShell"
import { HomePage } from "@/Features/Home/HomePage"
import { ShowcaseV1 } from "@/Features/Showcase/V1/Pages/ShowcaseV1/ShowcaseV1"
import { ShowcaseV2 } from "@/Features/Showcase/V2/Pages/ShowcaseV2/ShowcaseV2"
import { ShowcaseV3 } from "@/Features/Showcase/V3/Pages/ShowcaseV3/ShowcaseV3"
import { MockSiteV1 } from "@/Features/MockSiteV1/MockSite/MockSite"
import { MockSiteV2 } from "@/Features/MockSiteV2/MockSite/MockSite"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "showcase/v1",
        element: (
          <div className="theme-v1">
            <ShowcaseV1 />
          </div>
        ),
      },
      {
        path: "showcase/v2",
        element: (
          <div className="theme-v2">
            <ShowcaseV2 />
          </div>
        ),
      },
      {
        path: "showcase/v3",
        element: (
          <div className="theme-v3">
            <ShowcaseV3 />
          </div>
        ),
      },
      {
        path: "mock-site/v1",
        element: (
          <div className="theme-v1">
            <MockSiteV1 />
          </div>
        ),
      },
      {
        path: "mock-site/v2",
        element: (
          <div className="theme-v2">
            <MockSiteV2 />
          </div>
        ),
      },
    ],
  },
])
