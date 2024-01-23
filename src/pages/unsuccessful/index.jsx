import "@/app/globals.css"
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Input } from "@/components/input";
import Image from "next/image";

const UnsuccessfullPayment = () => {
    return (
        <>
            <section className="flex items-center justify-center h-[92vh]">
            <div className="flex items-center justify-center text-center flex-col w-[25rem] h-[25rem] gap-4 p-8 pb-10 rounded-2xl border border-solid bg-[#FFF] shadow-[0px_0px_4.387px_-0px_rgba(0, 0, 0, 0.02),0px_0px_27px_-0px_rgba(0, 0, 0, 0.04)]">
                <div>
                <Image src="./close-circle.svg" width={75} height={75}/>
                </div>
                <div>
                    <p className="font-bold text-xl">¡Pago cancelado!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et varius dolor elit facilisi enim. Nulla ut ut eu nunc.</p>
                </div>
                <div className="w-full">
                    <Button text='Crear nuevo pago'/>
                </div>
            </div>
        </section>
            <Footer />
        </>
    );
}

export default UnsuccessfullPayment