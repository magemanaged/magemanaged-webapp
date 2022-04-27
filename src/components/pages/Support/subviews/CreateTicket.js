import { React, useState } from 'react'
import './CreateTicket.css'
import Select from 'react-select'

function CreateTicket(props) {
    const [selectedSupport, updateSupport] = useState(0);
    const [selectedTopic, updateTopic] = useState(0);
    const options = [
        {
            label: 'Simple Helix',
            value: 0,
            image: "/SH_Logo.png",
        },
        {
            label: 'Modus21',
            value: 1,
            image: "/company_logo.png",
        }
    ]
    const topics = [
        {
            topic: "Software request",
            value: 0,
        },
        {   topic: "Password reset",
            value: 1,
        },
        {
            topic: "VPN issue",
            value: 2,
        },
        {
            topic: "Access request",
            value: 3,    
        },
        {
            topic: "Hardware issue",
            value: 4,    
        },
        {
            topic: "New phone",
            value: 5,    
        },
        {
            topic: "Other",
            value: 6,    
        },
    ]
  return (
    <div className={`create-ticket-view ${props.selected === props.name ? 'show' : 'hide'}`}>
        <div className="create-ticket-card page-view-card">
            <div className="top-container">
                <div className="title-container">
                <div className="create-ticket-title">
                    Submit a new ticket
                </div>
                <div className="ticket-sub-title">
                    Create a new ticket with Modus21 or Simple Helix.
                </div>
                </div>
                <div className="dropdown-container">
                
                <div className="dropdown-desc">

                </div>
                </div>
            </div>
            <div className="submit-to-container">
                <div className="selections-container">
                    <div className="support-select-container">
                        <div className="support-select-desc">
                            <div className="select-text">
                                Select support type for ticket submission: 
                            </div>
                            <div className="select-sub-text">
                                Simple Helix should be selected for almost all issues. <span><a href='/'>Why?</a></span> 
                            </div>
                        </div>
                        <div className="support-select">
                            <Select
                                placeholder="Select Option"
                                options={options}
                                value={options[selectedSupport]}
                                onChange={e => updateSupport(e.value)}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 5,
                                    colors: {
                                    ...theme.colors,
                                    //text: 'orangered',
                                    //neutral0: 'gray',
                                    //primary: 'black',
                                    },
                                })}
                                getOptionLabel={e => (
                                    <div style={{ width:'120px', height: '30px', display: 'flex', alignItems: 'center'}}>
                                    <img src={e.image} style={{height: '30px'}}/>
                                    </div>
                                )}
                            />
                            <div className="select-text">
                                {`${options[selectedSupport].label} Support`}
                            </div>
                        </div>
                    </div>
                    <div className="topic-select-container">
                        <div className="select-text">
                            Select the topic of your issue:
                        </div>
                        <div className="topic-select">
                            <Select
                                placeholder="Select Option"
                                options={topics}
                                value={topics[selectedTopic.value]}
                                onChange={e => updateTopic(e.value)}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 5,
                                    colors: {
                                    ...theme.colors,
                                    //text: 'orangered',
                                    //neutral0: 'gray',
                                    //primary250: 'black',
                                    },
                                })}
                                getOptionLabel={e => (
                                    <div style={{ width:'200px', height: '30px', display: 'flex', alignItems: 'center', color: 'black'}}>
                                    {e.topic}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="sub-topic-select-container">
                        <div className="select-text-hardware">
                            Select the topic of your issue:
                        </div>
                    </div>
                </div>
                <form id='new_support_ticket_form'>
                    <div className='input-flex'>
                        <label htmlFor="ticket_content"></label>
                        <input id='ticket_content' className='input-type' name='job_title' type="text" placeholder={"Enter support ticket text here."} required/>
                    </div>
                </form>
            </div>
            <div className="submission-details">

            </div>
        </div>
    </div>
  )
}

export default CreateTicket