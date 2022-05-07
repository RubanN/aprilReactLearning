import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./table.css"
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const ReactTableHome = () => {
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    })
    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });
    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue
        console.log(newFormData, "newFormData")
        setAddFormData(newFormData)

    }
    const handleEditFormChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }
    const handleAddFormSubmit = (event) => {

        event.preventDefault()
        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,

        }
        const newContacts = [...contacts, newContact];
        setContacts(newContacts)
        console.log("newContacts", newContacts)
    }
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id)
        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };
        setEditFormData(formValues)
    }
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };


    };
    return (
        <>

            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        handleEditFormChange={handleEditFormChange}
                                        editFormData={editFormData}
                                    />
                                ) : (
                                    <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} />
                                )
                                }
                            </Fragment>

                        )

                        )}

                    </tbody>

                </table>
            </form>

            <h2>Add a new contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter a address..."
                    onChange={handleAddFormChange}

                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phonenumber..."
                    onChange={handleAddFormChange}

                />
                <input
                    type="text"
                    name="email"
                    required="required"
                    placeholder="Enter a email..."
                    onChange={handleAddFormChange}

                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default ReactTableHome