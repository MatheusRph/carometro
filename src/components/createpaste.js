import "./styles/createpaste.css"
import Image from 'next/image';


export default function Createpaste() {
    return (
        <>
            <div class="container d-flex align-items-end">
                <div className="col-8">

                </div>
                <div class="flex-row d-flex button-add-paste align-items-center">
                    <Image src="/image/plus.png" alt="Descrição da imagem" width={45} height={45} className="m-3" />
                    <p className="jomhuria-regular">A</p>
                </div>
            </div>
        </>
    )
}