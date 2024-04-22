// pages/index.js
import Image from "next/image";
import "./styles/nav-bar.css"

export default function MyNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <a href="/" className="navbar-brand">
                        <Image src="https://www.sp.senai.br/images/senai.svg" alt="a" width={150} height={50} className="nav-brand" />
                    </a>
                    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center " id="navbarNav">
                        <ul className="navbar-nav  text-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/carometro">Carometro</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
