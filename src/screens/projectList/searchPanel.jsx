import { useEffect, useState } from "react";

export const SearchPanel = ({ params, setParams, users }) => {
  return (
    <form action="">
      <div>
        <input
          placeholder={"项目名"}
          type="text"
          value={params.name}
          onChange={(e) => setParams({ ...params, name: e.target.value })}
        />
        <select
          value={params.personId}
          onChange={(e) => {
            setParams({ ...params, personId: e.target.value });
          }}
        >
          {users.map((i) => {
            return (
              <option value={i.id} key={i.id}>
                {i.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};
