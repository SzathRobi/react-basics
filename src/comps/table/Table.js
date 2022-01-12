const Table = ({ tableHeaders = [], tableDatas = [] }) => {
  console.log("tableDatas:", tableDatas);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((tableHeader) => (
            <th key={tableHeader}>{tableHeader}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableDatas.map((tableData) => (
          <tr key={tableData[Object.keys(tableData)[0]]}>
            {Object.values(tableData).map((data) => (
              <td key={data}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
