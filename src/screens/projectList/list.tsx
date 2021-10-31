import { User } from "screens/projectList/searchPanel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>負責人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((i) => {
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
