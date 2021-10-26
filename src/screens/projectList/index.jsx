import { SearchPanel } from "./searchPanel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce } from "utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [params, setParams] = useState({
    name: "",
    personId: ""
  });
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(params);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
