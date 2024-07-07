

async function SpotsLayoutPage({ params }: { params: { eventId: string } }) {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Assentos</h1>
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <div className="w-4">A</div>
                    <div className="ml-2 flex flex-row">
                        {/* <SpotSeat spotNumber={1} disabled={false} />
                        <SpotSeat spotNumber={2} disabled={false} />
                        <SpotSeat spotNumber={3} disabled={false} />
                        <SpotSeat spotNumber={4} disabled={false} />
                        <SpotSeat spotNumber={5} disabled={false} />
                        <SpotSeat spotNumber={6} disabled={false} />
                        <SpotSeat spotNumber={7} disabled={false} /> */}
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-4">B</div>
                    <div className="ml-2 flex flex-row">
                        {/* <SpotSeat spotNumber={1} disabled={false} />
                        <SpotSeat spotNumber={2} disabled={false} />
                        <SpotSeat spotNumber={3} disabled={false} />
                        <SpotSeat spotNumber={4} disabled={false} />
                        <SpotSeat spotNumber={5} disabled={false} />
                        <SpotSeat spotNumber={6} disabled={false} />
                        <SpotSeat spotNumber={7} disabled={false} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpotsLayoutPage;