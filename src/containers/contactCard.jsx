import {useEffect, useState} from "react";
import axios from "axios";
import {ContactRow} from "../components/ContactRow.jsx";

const getContact = async () => {
    try{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/contacts'
        };
        const response = await axios.request(config)
        return response.data
    }
    catch (e){
        return [e]
    }
}
export const ContactCard = () => {
    const[contacts, setContact] = useState([])
    const fetchContactCard = async () => {
        const contactDetails = await getContact()
        setContact(contactDetails)
    }
    useEffect(() => {
        fetchContactCard()
    }, []);

    return (
        <div>
            {contacts.map((contact) => {
                return <ContactRow data={contact} key={contact.id} />
            })}
        </div>
    )
}