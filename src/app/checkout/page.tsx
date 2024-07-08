import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkoutAction(formData: FormData) {
    'use server'

    console.log(checkoutAction, formData);
    // const spots = formData.getAll('spots')

    const cookiesStore = cookies();
    const reservedSpotRaw = cookiesStore.get('spots')?.value;
    const reservedSpots = reservedSpotRaw ? JSON.parse(reservedSpotRaw) : [];

    console.log(reservedSpotRaw, reservedSpots)

    if (reservedSpots.length == 0) {
        return {error: "Selecione ao menos um assento."};
    }

    const eventId = cookiesStore.get('eventId')?.value;

    console.log(eventId, `http://localhost:8000/events/${eventId}/reserve`)

    await fetch(`http://localhost:8000/events/${eventId}/reserve`,{
        method: "POST",
        body  : JSON.stringify({
            spots: reservedSpots,
        }),
        headers:{
            "Content-type":"application/json",
        },
    });

    cookiesStore.set("spots", "")
    cookiesStore.set("eventId", "")

    redirect("/");
}

async function CheckoutPage() {

    const cookiesStore = cookies();
    const reservedSpotRaw = cookiesStore.get('spots')?.value;
    const reservedSpots = reservedSpotRaw ? JSON.parse(reservedSpotRaw) : [];

    return (
        <form action={checkoutAction}>
            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl text-black font-bold">Resumo do pedido</h2>

                        <p className="text-gray-700 mt-2">
                            Assentos escolhidos: {reservedSpots.join(", ")}
                        </p>
                        <p className="text-gray-700 mt-2">Total: R$ 100,00</p>
                        <p className="mt-2">
                            <button type="submit" className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded">
                                Confirmar Compra
                            </button>
                        </p>

                    </div>
                </div>
            </main>
        </form>
    );
}

export default CheckoutPage;