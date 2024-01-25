'use client'
import { Footer } from '../components/footer'
import { CreatePayment } from "@/templates/createPayment";
import './globals.css'

export default function PaymentGateway() {

  return (
    <main className="font-mulish">
      <CreatePayment/>
      <Footer/>
    </main>
  );
}
