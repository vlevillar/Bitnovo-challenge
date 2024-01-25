import { OrderItem } from "@/components/orderItem";

export const OrderSummary = ( { orderInfo, currencies } ) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
    return new Intl.DateTimeFormat("es-ES", options).format(new Date(dateString)).replace(",", "");
  };

  const selectedCurrency = currencies[orderInfo.currency_id];

  return (
    <>
    <p className="font-bold text-primary text-xl">Resumen del pedido</p>
    <div className="flex flex-col gap-8 p-8 bg-[#F9FAFC] rounded-2xl">
        <OrderItem left='Importe:' right={orderInfo.fiat_amount + " " + "EUR"}/>
        <OrderItem left='Moneda seleccionada:' right={orderInfo.currency_id} decoration={selectedCurrency ? selectedCurrency.image : null}/>
        <OrderItem left='Comercio:' right={orderInfo.merchant_device} noborder nobold decoration='/verify.svg'/>
        <OrderItem left='Fecha:' right={formatDate(orderInfo.created_at)} nobold/>
        <OrderItem left='Concepto:' right={orderInfo.notes} nobold/>
    </div>
    </>
  )
}
