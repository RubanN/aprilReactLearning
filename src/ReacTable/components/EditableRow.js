import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange }) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter a fullName...." name="fullName" value={editFormData.fullName} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a address...." name="address" value={editFormData.address} onChange={handleEditFormChange} />

            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a phoneNumber...." name="phoneNumber" value={editFormData.phoneNumber} onChange={handleEditFormChange} />

            </td>
            <td>
                <input type="text" required="required" placeholder="Enter a email...." name="email" value={editFormData.email} onChange={handleEditFormChange} />

            </td>
            <td>
                <button type="submit" >Save</button>
            </td>

        </tr>
    )
}

export default EditableRow