import React from 'react'

export const ObjectLiterals = () => {
    let firstname = "ruban";
    let lastname = "RV"
    const person = { // short hand
        firstname,
        lastname
    }
    function createPerson(firstname, lastname, age) {
        let fullname = firstname + " " + lastname;
        return {
            firstname,
            lastname,
            fullname,
            // isSenior: function () { // this is E5
            //     return age > 60
            // }
            isSenior() { // this is E6
                return age > 60
            }
        }
    }
    let p = createPerson("Ross", "Miller", "  ", 62);
    console.log(p.firstname)
    console.log(p.lastname)
    console.log(p.fullname)
    console.log(p.isSenior())
    return (
        <div>
            <h1>{person.firstname}</h1>
        </div>
    )
}
export const ObjectLiterals1 = () => {
    const pobj = {
        pCode: "1001",
        pName: "software",
        getData: function () {
            console.log(pobj.pCode, pobj.pName)
        }
    }
    console.log(pobj.getData())


    return (
        <>
        </>
    )
}

