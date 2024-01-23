import { Button } from "@/components/button";
import { Input } from "@/components/input";

export const CreatePayment = () => {
    return (
        <section className="flex items-center justify-center h-[92vh]">
            <div className="flex items-center justify-center flex-col w-[35rem] h-[35rem] gap-6 p-8 pb-10 rounded-2xl border border-solid bg-[#FFF] shadow-[0px_0px_4.387px_-0px_rgba(0, 0, 0, 0.02),0px_0px_27px_-0px_rgba(0, 0, 0, 0.04)]">
                <div>
                    <p className="font-bold text-3xl text-primary">Crear pago</p>
                </div>
                <div className="w-full">
                    <Input title="Importe a pagar" placeholder="Añade importe a pagar"/>
                </div>
                <div className="w-full">
                    <Input title="Seleccionar moneda" placeholder="BTC"/>
                </div>
                <div className="w-full">
                    <Input title="Concepto" placeholder="Añade descripción del pago"/>
                </div>
                <div className="w-full">
                    <Button text="Continuar"/>
                </div>
            </div>
        </section>
    );
}
