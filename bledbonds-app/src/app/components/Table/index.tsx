interface Header {
    name: string;
    onClick: () => void;
    icon?: JSX.Element;
}

interface TableProps<T> {
    header: Header[];
    data: T[];
    className?: string;
}

export default function Table<T extends object>(props: TableProps<T>) {
    return (
        <div className="w-[80%] md:w-[80vw] block overflow-auto mt-3">
            <table className={`md:min-w-[80vh] md:w-[80vw] md:max-w-[80vw] min-w-[80%] w-[80%] max-w-[80%] bg-palette-2 table-auto text-palette-11 gap-3`}>
                <thead>
                    <tr>
                        {props?.header?.map((item, i) => (
                            <th key={i} scope="col" onClick={item.onClick} className=" p-3 ">
                                <div className="flex content-center items-center">
                                    {item.name}
                                    {item.icon}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        props?.data?.map((item, i) => (
                            <tr key={i}>
                                {Object.values(item).map((value, i) => (
                                    <td key={i} className=" p-3 ">
                                        <div>{String(value)}</div>
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
