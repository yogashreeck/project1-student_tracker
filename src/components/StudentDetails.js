import React from 'react'

const StudentDetails = (items) => {
    return (
        <div>
            <center><h1>Student List</h1></center>
            {items.map((items) => (
                <div >
                    <h2>{items.studentname}</h2>
                    <p>{items.address}</p>
                    <p>{items.email}</p>
                    <p>{items.mobileNumber}</p>

                </div>
            ))}
        </div>
    )
};

export default StudentDetails;