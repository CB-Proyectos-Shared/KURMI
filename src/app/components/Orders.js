export default function Orders_P() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                <tr>
                                    <th scope="col" className=" px-6 py-4">
                                        #
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Nombre
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Orden
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                        1
                                    </td>
                                    <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                                    <td className="whitespace-nowrap  px-6 py-4">Zanahorias</td>
                                    <td className="whitespace-nowrap  px-6 py-4">Entregado</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                        2
                                    </td>
                                    <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                                    <td className="whitespace-nowrap  px-6 py-4">Papas</td>
                                    <td className="whitespace-nowrap  px-6 py-4">En Espera</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}