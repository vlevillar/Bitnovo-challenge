import "@/app/globals.css"
import { Footer } from "@/components/footer";
import { OrderSummary } from "@/templates/orderSummary";
import { Payment } from "@/templates/payment";

const Order = () => {
    return (
        <>
            <section className="flex items-center justify-center h-[92vh]">
                <div className="flex items-center justify-center w-[75rem] h-[35rem] gap-8 p-8">
                    <div className="flex-1 h-full flex-col items-start gap-6">
                        <OrderSummary/>
                    </div>
                    <div className="flex-1 h-full">
                        <Payment/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Order