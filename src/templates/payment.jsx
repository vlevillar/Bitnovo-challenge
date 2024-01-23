import { Button } from "@/components/button"
import Image from "next/image"

export const Payment = () => {
    return (
        <>
            <p className="font-bold text-primary text-xl">Realiza el pago</p>
            <div className="flex flex-col p-8 justify-between gap-6 items-center bg-[#FFF] border border-solid border-[#F5F5F5] rounded-2xl shadow-[0px_0px_4.387px_-0px_rgba(0, 0, 0, 0.02),0px_0px_27px_-0px_rgba(0, 0, 0, 0.04)">
                <div className="flex">
                    <Image src="./XRP.svg" width={20} height={20} className="mr-2" />
                    <p className="font-semibold text-primary text-sm">05:10</p>
                </div>
                <div className="flex gap-3 w-52">
                    <Button text="Smart QR" isGroup />
                    <Button text="Web3" isGroup />
                </div>
                <div>
                    <Image src="./XRP.svg" width={150} height={150} />
                </div>
                <div className="flex flex-col items-center content-center gap-3 text-center">
                    <div className="flex">
                        <p>
                            Enviar {' '}
                            <span className="font-bold">10 XRP</span>
                        </p>
                        <Image src="./XRP.svg" width={20} height={20} className="ml-2" />
                    </div>
                    <div className="flex">
                        <p className="break-all">
                            Xp4Lw2PtQgB7RmedTak143LrXp4Lw2PtQgB7RmedEV731CdTak143LrXp4L
                        </p>
                        <Image src="./XRP.svg" width={20} height={20} className="ml-2" />
                    </div>
                    <div className="flex">
                        <Image src="./XRP.svg" width={20} height={20} className="mr-2" />
                        <p>
                            Etiqueta de destino: 2557164061
                        </p>
                        <Image src="./XRP.svg" width={20} height={20} className="ml-2" />
                    </div>
                </div>
            </div>
        </>
    )
}
