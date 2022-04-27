import { React, useState } from 'react'
import PageHeader from '../Header/PageHeader'
import { TabList } from '../../constants/TabList'
import ViewTickets from './subviews/ViewTickets';
import CreateTicket from './subviews/CreateTicket';

function Support() {
    const header =  {
        title: "Modus21 Support",
        update: "You have no open support tickets",
        description: "Create support tickets and view frequently asked questions."
    }
    const pageTitles = ["Tickets", "Create Ticket", "FAQs and Troubleshooting"];
    const [selectPage, setPage] = useState(pageTitles[0]);

    function updatePage(pageName)
    {
      setPage(pageName);
    }

  return (
    <>
    <PageHeader title={header.title} update={header.update} description={header.description}/>
    <TabList items={pageTitles} click={updatePage} selected={selectPage} style={"page-tab"} color={"normal-color"}/>
    <ViewTickets name={pageTitles[0]} selected={selectPage}></ViewTickets>
    <CreateTicket name={pageTitles[1]} selected={selectPage}></CreateTicket>
    </>
  )
}

export default Support