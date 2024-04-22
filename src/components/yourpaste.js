 import './styles/yourpaste.css'
 import Image from 'next/image'

export default function Yourpastes() {
    return (
        <>
            <div class="container col-8 text-center yourpastes d-flex">
                <div class="col-12 align-items-start d-flex flex-column">
                    <div class="col-12 div-input d-flex align-items-center justify-content-center">
                        <div className='input-wrapper d-flex align-items-center justify-content-center'>
                            <Image src="/image/search.png" alt="a" class="search-img" width={30} height={30} className="nav-brand" />
                            <input className='col-11 jomhuria-regular' placeholder='Search...'></input>
                        </div>
                    </div>
                    <div class="col div-class col-12 d-flex align-items-center justify-content-center flex-row">
                        <div className='class col-3'>
                            a
                        </div>
                        
                        <div className='class col-3'>
                            a
                        </div>
                        
                        <div className='class col-3'>
                            a
                        </div>
                        <div className='class col-3'>
                            a
                        </div>
                        
                        <div className='class col-3'>
                            a
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}