export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>負責人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((i, idx) => {
          console.log(i.personId);
          return (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>
                {users.find((user) => user.id === i.personId)?.name || ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
