import React, {useCallback} from 'react'
import {useEffect, useState} from "react";
import axios from "axios";

const getContacts = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/contacts',
        };
        const response = await axios.request(config)
        return response.data
    } catch (e) {
        console.log(e)
        return []
    }
}
export const ContactsList = () => {
    const [contacts, setContacts] = useState([])


    const fetchContacts = useCallback(async () => {
            const _contacts = await getContacts()
            setContacts(_contacts)
    }, []);

    useEffect( () => {
        // call api to get contacts. setContacts
        fetchContacts();
    }, [])


    return <div>{contacts.map((contact) => {
        return <div>{contact.name + ' ' + contact.id + ' ' + contact.city}</div>
    })}</div>
}