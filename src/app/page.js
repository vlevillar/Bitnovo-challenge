'use client'
import { Footer } from '../components/footer'
import { CreatePayment } from "@/templates/createPayment";
import useCurrencies from '@/hooks/useCurrencies';
import './globals.css'
import CriptoSelect from '@/components/criptoSelect';

export default function PaymentGateway() {
  const { currencies } = useCurrencies();

  console.log(currencies);

  return (
    <main className="font-mulish">
      <CreatePayment/>
      <CriptoSelect currencies={currencies} />
      <Footer/>
    </main>
  );
}
