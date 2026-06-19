import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import SocialSidebar from "./ui/SocialSidebar";
import WhatsAppButton from "./WhatsAppButton";
import Chatbot from "@/pages/Chatbot";

const Layout: React.FC = () => {
    return (
        <>
            <TopNavbar />
            <Header />
            <SocialSidebar />
            <main>
                <Outlet />
            </main>
            <WhatsAppButton />
            <Chatbot />
            <Footer />
        </>
    );
};

export default Layout;
