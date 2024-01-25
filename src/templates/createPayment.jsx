import { Button } from "@/components/button";
import CriptoSelect from "@/components/criptoSelect";
import { Input } from "@/components/input";
import useCurrencies from '@/hooks/useCurrencies';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';


export const CreatePayment = () => {
    const router = useRouter()
    const { currencies } = useCurrencies();
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    console.log(currencies);

    useEffect(() => {
        if (currencies.length > 0) {
            setSelectedCurrency(currencies[0].symbol);
        }
    }, [currencies]);

    const handleCryptoSelect = (crypto) => {
        setSelectedCurrency(crypto.symbol);
    };


    const handleAmountChange = (value) => {
        setAmount(value);
    };

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const isFormCompleted = () => !!amount && !!selectedCurrency && !!description;

    const handleSubmit = async () => {
        if (isFormCompleted()) {
            const apiUrl = "https://payments.pre-bnvo.com/api/v1/orders/";
            const deviceId = process.env.NEXT_PUBLIC_DEVICE_ID;

            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "X-Device-Id": deviceId,
                    },
                    body: JSON.stringify({
                        expected_output_amount: amount,
                        input_currency: selectedCurrency,
                        notes: description,
                    }),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log("Respuesta exitosa:", responseData);
                    router.push(`/order/${responseData.identifier}`);
                } else {
                    console.error("Error en la solicitud:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        }
    };


    return (
        <section className="flex items-center justify-center h-[92vh]">
            <div className="flex items-center justify-center flex-col w-[35rem] h-[35rem] gap-6 p-8 pb-10 rounded-2xl border border-solid bg-[#FFF] shadow-[0px_0px_4.387px_-0px_rgba(0, 0, 0, 0.02),0px_0px_27px_-0px_rgba(0, 0, 0, 0.04)]">
                <div className={`${isOpen ? 'hidden' : ''}`}>
                    <p className="font-bold text-3xl text-primary">Crear pago</p>
                </div>
                <div className={`${isOpen ? 'hidden' : 'w-full'}`}>
                    <Input title="Importe a pagar" placeholder="Añade importe a pagar" type='number' value={amount} onChange={handleAmountChange} />
                </div>
                <div className="w-full">
                    <CriptoSelect currencies={currencies} isOpen={isOpen} toggleOpen={toggleOpen} setIsOpen={setIsOpen} onCryptoSelect={handleCryptoSelect} />
                </div>
                <div className={`${isOpen ? 'hidden' : 'w-full'}`}>
                    <Input title="Concepto" placeholder="Añade descripción del pago" value={description} onChange={handleDescriptionChange} />
                </div>
                <div className={`${isOpen ? 'hidden' : 'w-full'}`}>
                    <Button text="Continuar" onClick={handleSubmit} disabled={!isFormCompleted()} />
                </div>
            </div>
        </section>
    );
};
