import './styles/yourpaste.css';
import Image from 'next/image';

export default function Yourpastes() {
    return (
        <div className="container col-8 text-center yourpastes d-flex">
            <div className="col-12 align-items-start d-flex flex-column">
                <div className="col-12 div-input d-flex align-items-center justify-content-center">
                    <div className='input-wrapper'>
                        <Image src="/image/search.png" alt="a" className="search-img" width={30} height={30} className="nav-brand" />
                        <input className='col-11 jomhuria-regular' placeholder='Search...' />
                    </div>
                </div>
                <div className="col div-class col-12 d-flex flex-wrap justify-content-center">
                    <div className='class idev'>
                        <h2>Idev-1</h2>
                    </div>

                    <div className='class idev'>
                        <h2>Idev-2</h2>
                    </div>

                    <div className='class idev'>
                        <h2>Idev-3</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-1</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-2</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-3</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-3</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-3</h2>
                    </div>

                    <div className='class elec-mec'>
                        <h2>Elec/Mec-3</h2>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}
