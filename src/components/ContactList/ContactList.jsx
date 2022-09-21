import React,{useEffect} from "react";
import "./ContactList.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import list from "./images/list.png"
import {NavLink} from 'react-router-dom'
import { useState } from "react";

const ContactList = () => {
    const [contacts,setcontact]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/contact/all',{
            method:"get",
            headers:{
                "accessToken":sessionStorage.getItem('accessToken')
            }
        }).then(res=>res.json()).then(data=>{
            setcontact(data)
        })
    },[])
    return (
        <div className="conatct_container">
            <div className="cont-main-container">
                <div className="contContainer">
                    <div className="cont-header">

                        <div className="selectDate">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="15" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            <span>
                                Select Date
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down downArrow" width="15" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        <div className="filter">
                            <img src={list} style={{ width: 18, height: 15, marginBottom: -3, marginTop: 0, marginLeft: 0 }} alt="" className="filter" />
                            <span >Filter  | </span>
                            {/* <img src={arrow} style={{ width: 22, height: 18, marginBottom: -6, zIndex: -1, marginLeft:-10}} alt="" className="filter" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down downArrow" width="15" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        <div className="export">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-up" width="15" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="4" x2="12" y2="14"></line>
                                <line x1="12" y1="4" x2="16" y2="8"></line>
                                <line x1="12" y1="4" x2="8" y2="8"></line>
                                <line x1="4" y1="20" x2="20" y2="20"></line>
                            </svg>
                            <span>Export</span>
                        </div>

                        <div className="import">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-down-up" width="15" height="18" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="17" y1="3" x2="17" y2="21"></line>
                                <path d="M10 18l-3 3l-3 -3"></path>
                                <line x1="7" y1="21" x2="7" y2="3"></line>
                                <path d="M20 6l-3 -3l-3 3"></path>
                            </svg>
                            <span>import</span>
                        </div>
                        <div className="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="15" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                            <span>Delete</span>
                        </div>




                    </div>
                    <div className="tableHeading">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" key={"hello"} id="true" className="checkbox" onClick={(e) => {
                                            console.log(e.target.value)
                                        }} name="" /> Name
                                    </th>
                                    <th>| Designation
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-vertical" width="15" height="15" viewBox="0 0 24 24" strokeWidth="3" stroke="#605750" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 18l3 3l3 -3"></path>
                                            <path d="M12 15v6"></path>
                                            <path d="M15 6l-3 -3l-3 3"></path>
                                            <path d="M12 3v6"></path>
                                        </svg>
                                    </th>
                                    <th>| Company
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-vertical" width="15" height="15" viewBox="0 0 24 24" strokeWidth="3" stroke="#605750" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 18l3 3l3 -3"></path>
                                            <path d="M12 15v6"></path>
                                            <path d="M15 6l-3 -3l-3 3"></path>
                                            <path d="M12 3v6"></path>
                                        </svg>
                                    </th>
                                    <th>| Industry
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-vertical" width="15" height="15" viewBox="0 0 24 24" strokeWidth="3" stroke="#605750" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 18l3 3l3 -3"></path>
                                            <path d="M12 15v6"></path>
                                            <path d="M15 6l-3 -3l-3 3"></path>
                                            <path d="M12 3v6"></path>
                                        </svg>
                                    </th>
                                    <th>| Email</th>
                                    <th>| Phone Number</th>
                                    <th>| Country</th>
                                    <th>| Action</th>
                                </tr>
                            </thead>

                            {/* table data */}

                            
                            <tbody>
                            {
                                contacts.map((contact,i)=>{

                                
                               return <tr key={i}>
                                    <td>
                                        <input type="checkbox" />
                                        <span>{contact.name}</span>
                                    </td>
                                    <td>{contact.designation}</td>
                                    <td>{contact.company}</td>
                                    <td>{contact.industry}</td>
                                    <Tippy content={contact.email}>
                                        <td className="hovering">{contact.email}</td>
                                    </Tippy>
                                    <td className="hovering">{contact.mobile}</td>
                                    <td>{contact.country}</td>
                                    <td>
                                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil icon2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#0884FF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                        </svg></span>
                                        <span> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash icon1" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#F81D1D" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="4" y1="7" x2="20" y2="7"></line>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                        </svg></span>

                                    </td>
                                </tr>
                            })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
               
            </div>
            <div className="cont-footer-container">
            <div className="pages">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="18" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
                <NavLink className="anchor first">1</NavLink>
                <NavLink className="anchor">2</NavLink>
                <NavLink className="anchor">3</NavLink>
                <NavLink className="anchor">4</NavLink>
                <NavLink className="anchor">5</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="18" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
            </div>
            </div>
        </div>
    )
}

export default ContactList;