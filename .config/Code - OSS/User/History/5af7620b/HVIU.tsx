import Header from "../components/Header"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
        </div>
    )
}

export default Layout;