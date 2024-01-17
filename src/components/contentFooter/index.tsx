export default function ContentFooter () {
    return (
        <footer>
            <div className="footer-oval">
                <div className="custom-shape-divider-top-1705452502 bg-gray-800">
                    <svg data-name="Layer 1" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                {/*check code below because it's not working, I mean is not centered*/}
                <div className="absolute top-80 text-white">
                    <div className="grid max-w-3xl">
                        <div className="justify-items-center">
                            <h1>footer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
