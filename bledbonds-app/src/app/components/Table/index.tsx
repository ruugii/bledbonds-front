'use client';

import Button from "@/app/UX/button/button";
import { useEffect, useState } from "react";

interface Header {
  name: string;
  onClick: () => void;
  icon?: JSX.Element;
}

interface TableProps<T> {
  header: Header[];
  data: T[];
  className?: string;
  button?: JSX.Element;
  divider?: boolean;
}

export default function Table<T extends object>(props: TableProps<T>) {

  const [maxData, setMaxData] = useState(20);
  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    if (page === 0) {
      handlePage(1);
    } else if (page > Math.ceil(props.data.length / maxData)) {
      handlePage(Math.ceil(props.data.length / maxData));
    } else {
      setPage(page);
    }
  }

  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    props.divider ? setData(props.data.slice((page - 1) * maxData, page * maxData)) : setData(props.data);
  }, [page, maxData, props.data, props.divider]);

  return (
    <>
      <div className="w-[80%] md:w-[80vw] block overflow-auto mt-3 mb-3">
        <table className={`md:min-w-[80vh] md:w-[80vw] md:max-w-[80vw] min-w-[80%] w-[80%] max-w-[80%] bg-palette-2 dark:bg-palette-10 table-auto text-palette-11 dark:text-palette-50 gap-3`}>
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
            {data?.map((item, i) => {
              console.log(item);
              return (
                <tr key={i}>
                  {Object.values(item).map((value, i) => (
                    <td key={i} className=" p-3 ">
                      <div>{String(value)}</div>
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          {props.button}
        </div>
      </div>
      {props.divider && (
        <div className="flex justify-center w-full gap-3">
          {page > 1 && (
            <Button
              onClick={() => handlePage(page - 1)}
              className="w-fit"
              label="Anterior"
            />
          )}
          {page < Math.ceil(props.data.length / maxData) && (
            <Button
              onClick={() => handlePage(page + 1)}
              className="w-fit"
              label="Siguiente"
            />
          )}
        </div>
      )}
    </>
  );
}
