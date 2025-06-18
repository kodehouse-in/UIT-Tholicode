import { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { usePage } from "../contexts/PageContext";

export default function AboutUs() {

    const { page, setPage } = usePage();
    
    useEffect(() => {
        setPage('/about-us');
    }, [page])

    return (
        <div>
            <Header />
            <Navbar />
        </div>
    )
}