import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import HomePage from "../page/home/HomePage.jsx";
import Testimonials from "../pages/services/Testimonials.jsx";
import LocalLeadGeneration from "../pages/services/LocalLeadGeneration";
import PaidSearchMarketing from "../pages/services/PaidSearchMarketing";
import SearchEngineOptimization from "../pages/services/SearchEngineOptimization";
import GoogleMyBusiness from "../pages/services/GoogleMyBusiness";
import GoogleMyBusinessSetup from "../pages/services/GoogleMyBusinessSetup";
import GoogleMyBusinessOptimization from "../pages/services/GoogleMyBusinessOptimization";
import GoogleMyBusinessManagement from "../pages/services/GoogleMyBusinessManagement";
import WebDesign from "../pages/services/WebDesign";
import WebDevelopment from "../pages/services/WebDevelopment";
import CalculatorPage from "../page/CalculatorPage";
import { ThemeProvider } from "../context/ThemeContext";
import { HelmetProvider } from 'react-helmet-async';

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: (
				<HelmetProvider>
					<ThemeProvider>
						<Layout />
					</ThemeProvider>
				</HelmetProvider>
			),
			children: [
				{
					path: "/",
					element: <LayoutOne />,
					children: [
						{
							path: "/",
							element: <HomePage />,
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
							path: "/testimonials",
							element: <Testimonials />,
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
						},
						{
							path: "/calculator",
							element: <CalculatorPage />,
						},
						{
							path: "*",
							element: <ErrorPage />
						}
					],
				},
			],
			errorElement: <ErrorPage />,
		},
	],
	{
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true
		}
	}
);
