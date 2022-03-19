import React from 'react'

const List = (data) => {
  return (
    <div >
        <div className=''>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default List