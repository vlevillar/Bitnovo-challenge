'use client'
import "@/app/globals.css"
import { Footer } from '@/components/footer';
import useCurrencies from "@/hooks/useCurrencies";
import { OrderSummary } from '@/templates/orderSummary';
import { Payment } from '@/templates/payment';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Order = () => {
    const router = useRouter();
    const { id } = router.query;
    const { currencies } = useCurrencies()
    const [orderInfo, setOrderInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const redirectOnStatus = (status) => {
            if (status === 'CO' || status === 'AC') {
              router.replace('/successful');
            }
            if (status === 'EX' || status === 'OC' || status === "IA" || status === "FA") {
              router.replace('/unsuccessful');
            }
          };
      
          const fetchOrderInfo = async () => {
            try {
                const deviceId = "53a79755-fc18-4360-ba50-f2404e280c2e";
        
                const response = await fetch(`https://payments.pre-bnvo.com/api/v1/orders/info/${id}`, {
                    headers: {
                        "X-Device-Id": deviceId,
                    },
                });
        
                if (!response.ok) {
                    throw new Error('Failed to fetch order information');
                }
        
                const fetchedData = await response.json();

        
                setOrderInfo(Array.isArray(fetchedData) ? fetchedData[0] : fetchedData);
                redirectOnStatus(fetchedData[0].status);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        
    
        if (id) {
            fetchOrderInfo();
    
            const socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/${id}`);
            console.log(socket);
    
            socket.onopen = (event) => {
                console.log('WebSocket abierto:', event);
            };
    
            socket.onmessage = (event) => {
                console.log('Mensaje del WebSocket:', event.data);
                const socketData = JSON.parse(event.data);
                setOrderInfo(socketData);

                redirectOnStatus(socketData.status)
            };
    
            socket.onerror = (error) => {
                console.error('Error en el WebSocket:', error);
            };
    
            socket.onclose = (event) => {
                console.log('WebSocket cerrado:', event);
            };
    
            return () => {
                socket.close();
            };
        }
    }, [id, router]);
    


    if (loading) {
        return (
        <>
        <section className="flex items-center justify-center h-[92vh]">
            <div className="flex items-center justify-center w-[75rem] h-[35rem] gap-8 p-8">
                <div className="flex-1 h-full flex-col items-center justify-center gap-6">
                    <Image src="/loading.gif" width={75} height={75}/>
                </div>
                <div className="flex-1 h-full items-center justify-center">
                    <Image src="/loading.gif" width={75} height={75}/>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const currenciesObj = currencies.reduce((obj, currency) => {
        obj[currency.symbol] = currency;
        return obj;
    }, {});

    return (
        <>
            <section className="flex items-center justify-center h-[92vh]">
                <div className="flex items-center justify-center w-[75rem] h-[35rem] gap-8 p-8">
                    <div className="flex-1 h-full flex-col items-start gap-6">
                        <OrderSummary orderInfo={orderInfo} currencies={currenciesObj} />
                    </div>
                    <div className="flex-1 h-full">
                        <Payment orderInfo={orderInfo} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Order;
