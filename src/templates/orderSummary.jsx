import { OrderItem } from "@/components/orderItem";

export const OrderSummary = () => {
  return (
    <>
    <p className="font-bold text-primary text-xl">Resumen del pedido</p>
    <div className="flex flex-col gap-8 p-8 bg-[#F9FAFC] rounded-2xl">
        <OrderItem left='Importe:' right='50,01 EUR'/>
        <OrderItem left='Moneda seleccionada:' right='XRP' decoration/>
        <OrderItem left='Comercio:' right='Comercio de pruebas de tito' noborder nobold decoration/>
        <OrderItem left='Fecha:' right='21/01/2023 08:43' nobold/>
        <OrderItem left='Concepto:' right='Viajes & Ocio' nobold/>
    </div>
    </>
  )
}
