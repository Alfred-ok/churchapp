import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react'

const Employees = () => {
  const [visible, setVisible] = useState(false)
  const [selectedEmployees, setSelectedEmployees] = useState({})

  const handleAssignCardClick = (employee) => {
    setSelectedEmployees(employee)
    setVisible(true) // Show the modal when "Assign Card" is clicked
  }

  const employees = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', mobile: '@mdo', email: 'otto@gmail.com' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', mobile: '@fat', email: 'otto@gmail.com' },
    { id: 3, firstName: 'Larry', lastName: 'Bird', mobile: '@twitter', email: 'otto@gmail.com' },
  ]

  return (
    <>
      <CCard
        className="mb-4"
        style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)', color: 'blue', padding: '20px' }}
      >
        <CCardHeader style={{ backgroundColor: '#fff' }}>
          <h3>CHURCH MEMBERS</h3>
        </CCardHeader>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Surname</CTableHeaderCell>
              <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {employee.map((employee) => (
              <CTableRow key={employee.id}>
                <CTableHeaderCell scope="row">{employee.id}</CTableHeaderCell>
                <CTableDataCell>{employee.firstName}</CTableDataCell>
                <CTableDataCell>{employee.lastName || '-'}</CTableDataCell>
                <CTableDataCell>{employee.mobile}</CTableDataCell>
                <CTableDataCell>{employee.email}</CTableDataCell>
                <CTableDataCell>hgdhfhfh</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>

      {/* Modal for showing selected member details */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Assign Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedEmployees ? (
            <>
              <p>
                <strong>First Name:</strong> {selectedEmployees.firstName}
              </p>
              <p>
                <strong>Surname:</strong> {selectedEmployees.lastName || '-'}
              </p>
              <p>
                <strong>Mobile Number:</strong> {selectedEmployees.mobile}
              </p>
              <p>
                <strong>Email:</strong> {selectedEmployees.email}
              </p>
            </>
          ) : (
            <p>No employee selected.</p>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Assign</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Employees
