"use client";

type TableProps = {
  data: { [k: string]: string | number }[];
};

const isRenderableType = (item: any) => {
  if (typeof item === "string") return true;
  if (typeof item === "number") return true;

  return false;
};

export default function TableComponent({ data }: TableProps) {
  if (data.length <= 0) return <></>;

  return (
    <div className="w-full overflow-x-scroll">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header) =>
              isRenderableType(data[0][header]) ? (
                <th key={header}>{header}</th>
              ) : (
                <></>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ind) => (
            <tr key={ind}>
              {Object.keys(row).map((itemKey, cellInd) =>
                isRenderableType(row[itemKey]) ? (
                  <td key={`${ind}_${cellInd}`}>{row[itemKey]}</td>
                ) : (
                  <></>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
