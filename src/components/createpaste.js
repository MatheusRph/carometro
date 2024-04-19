import "./styles/createpaste.css"
import Image from 'next/image';


export default function Createpaste() {
    return (
        <>
            <div class="container d-flex align-items-end flex-row-reverse">

                <div class="flex-row d-flex button-add-paste align-items-center">
                    <Image src="/image/plus.png" alt="Descrição da imagem" width={45} height={45} className="m-3 me-0" />
                    <p className="jomhuria-regular">Create paste</p>
                </div>
            </div>
        </>
    )
}