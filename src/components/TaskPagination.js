import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const pageSize = 5;

export default function TaskPagination(props) {
  const { taskList, pagination, setPagination, setPaginateTasks } = props;

  const count = Math.ceil(taskList.length / pageSize);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      const slicedTasks = taskList.slice(pagination.from, pagination.to);
      setPaginateTasks(slicedTasks);
    }
  }, [pagination]);

  const handleChange = (e, p) => {
    const from = (p - 1) * pageSize;
    const to = (p - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <div>
      <Pagination count={count} onChange={handleChange} />
    </div>
  );
}
