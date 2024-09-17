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

const Members = () => {
  const [visible, setVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState({})

  const handleAssignCardClick = (member) => {
    setSelectedMember(member)
    setVisible(true) // Show the modal when "Assign Card" is clicked
  }

  const members = [
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
            {members.map((member) => (
              <CTableRow key={member.id}>
                <CTableHeaderCell scope="row">{member.id}</CTableHeaderCell>
                <CTableDataCell>{member.firstName}</CTableDataCell>
                <CTableDataCell>{member.lastName || '-'}</CTableDataCell>
                <CTableDataCell>{member.mobile}</CTableDataCell>
                <CTableDataCell>{member.email}</CTableDataCell>
                <CTableDataCell>
                  <CDropdown alignment="end">
                    <CDropdownToggle color="success" style={{color:"#fff"}}>Action</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => handleAssignCardClick(member)}>
                        Assign Card
                      </CDropdownItem>
                      <CDropdownItem>Delete</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
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
          <p>
            <strong>First Name:</strong> {selectedMember.firstName}
          </p>
          <p>
            <strong>Surname:</strong> {selectedMember.lastName || '-'}
          </p>
          <p>
            <strong>Mobile Number:</strong> {selectedMember.mobile}
          </p>
          <p>
            <strong>Email:</strong> {selectedMember.email}
          </p>
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

export default Members
