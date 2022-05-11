import React, { useEffect, useState } from "react";
import PageHeader from "../components/Header/PageHeader";

function Employees() {
  const pageTitles = ["All users", "Add user", "User template"];
  const header = {
    title: "Modus21 Users",
    update: `0 total users`,
    description: "All company employees",
  };
  return (
    <PageHeader
      title={header.title}
      update={header.update}
      description={header.description}
    />
  );
}

export default Employees;
