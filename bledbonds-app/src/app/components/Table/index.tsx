import ArrowAsc from "@/app/Icons/arrowAsc";

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
        <table className={`md:min-w-[80vh] md:w-[80vw] grid grid-cols-1 min-w-[80%] w-[80%] md:text-center divide-y divide-gray-200 border-collapse ${props.className ? props.className : ''}`}>
            <thead>
                <tr className="w-full bg-palette-2 block">
                    {props?.header?.map((item, index) => (
                        <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-palette-11 uppercase tracking-wider border-palette-3 border-solid" onClick={item.onClick}>
                            <div className="flex content-center items-center content-center">
                                {item.name}
                                {item.icon}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props?.data?.map((item, index) => (
                    <tr key={index} className="bg-palette-2 divide-gray-200 w-full block">
                        {Object.values(item).map((value, index) => {
                            return (
                                <td key={index} className="px-6 py-4 whitespace-nowrap border-palette-3 border-solid">
                                    <div className="text-sm text-palette-11">{String(value)}</div>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
