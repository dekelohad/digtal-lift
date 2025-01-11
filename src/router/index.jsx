import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import BlogPage from "../page/blog/BlogPage.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import TestimonialsPage from "../pages/testimonials";
import LocalLeadGeneration from "../pages/services/LocalLeadGeneration";
import PaidSearchMarketing from "../pages/services/PaidSearchMarketing";
import SearchEngineOptimization from "../pages/services/SearchEngineOptimization";
import GoogleMyBusiness from "../pages/services/GoogleMyBusiness";
import GoogleMyBusinessSetup from "../pages/services/GoogleMyBusinessSetup";
import GoogleMyBusinessOptimization from "../pages/services/GoogleMyBusinessOptimization";
import GoogleMyBusinessManagement from "../pages/services/GoogleMyBusinessManagement";
import WebDesign from "../pages/services/WebDesign";
import WebDevelopment from "../pages/services/WebDevelopment";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/blog",
						element: <BlogPage />,
					},
					{
						path: "/testimonials",
						element: <TestimonialsPage />,
					},
					{
						path: "/local-lead-generation",
						element: <LocalLeadGeneration />,
					},
					{
						path: "/paid-search-marketing",
						element: <PaidSearchMarketing />,
					},
					{
						path: "/search-engine-optimization",
						element: <SearchEngineOptimization />,
					},
					{
						path: "/google-business-profile",
						element: <GoogleMyBusiness />,
					},
					{
						path: "/google-business-profile/setup",
						element: <GoogleMyBusinessSetup />,
					},
					{
						path: "/google-business-profile/optimization",
						element: <GoogleMyBusinessOptimization />,
					},
					{
						path: "/google-business-profile/management",
						element: <GoogleMyBusinessManagement />,
					},
					{
						path: "/web-design",
						element: <WebDesign />,
					},
					{
						path: "/web-development",
						element: <WebDevelopment />,
					}
				],
			},
		],
		errorElement: <ErrorPage />,
	},
]);
