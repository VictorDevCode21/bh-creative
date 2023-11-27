

function HeaderAbout() {
    return (
        <header className="w-full h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/images/about/startup.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="flex items-center justify-center bg-dark p-1.5 rounded-lg ">
                <h1 className="font-bold xs:text-2xl lg:text-6xl text-light  ">About Us</h1>
            </div>
        </header>
    )
}

export default HeaderAbout