import React, { useState } from 'react'
import {
  CCard,
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
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CTabs,
  CTabContent,
  CTabPane,
  CTab,
  CTabList,
} from '@coreui/react'
import { FiSearch } from 'react-icons/fi'

const Members = () => {
  const [visible, setVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState({})
  const [searchFirstName, setSearchFirstName] = useState('')
  const [searchMobile, setSearchMobile] = useState('')
  const [activeTab, setActiveTab] = useState(1) // 1: All, 2: Receiving, 3: Non-Receiving

  const handleAssignCardClick = (member) => {
    setSelectedMember(member)
    setVisible(true)
  }

  const members = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      mobile: '@mdo',
      email: 'otto@gmail.com',
      receiving: true,
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      mobile: '@fat',
      email: 'otto@gmail.com',
      receiving: true,
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      mobile: '@twitter',
      email: 'otto@gmail.com',
      receiving: false,
    },
  ]

  // Filter members based on the active tab
  const filteredMembers = members.filter(
    (member) =>
      member.firstName.toLowerCase().includes(searchFirstName.toLowerCase()) &&
      member.mobile.toLowerCase().includes(searchMobile.toLowerCase()) &&
      (activeTab === 1 ||
        (activeTab === 2 && member.receiving) ||
        (activeTab === 3 && !member.receiving)),
  )

  return (
    <>
      <CCard
        className="mb-4"
        style={{
          boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)',
          color: 'light-gray',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {/* Tabs for All, Receiving, and Non-Receiving Members */}
        <CTabs activeKey={activeTab} onActiveKeyChange={setActiveTab}>
          <CTabList
            variant="pills"
            className="d-flex justify-content-center"
            style={{ marginBottom: '10px' }} // Raise tabs above the bottom border
          >
            <CTab
              itemKey={1}
              style={{ margin: '0 5px', borderRadius: '100px', fontWeight: 'bold' }} // Space between tabs
            >
              All Members
            </CTab>
            <CTab
              itemKey={2}
              style={{ margin: '0 5px', borderRadius: '100px', fontWeight: 'bold' }} // Space between tabs
            >
              Receiving Members
            </CTab>
            <CTab
              itemKey={3}
              style={{ margin: '0 5px', borderRadius: '100px', fontWeight: 'bold' }} // Space between tabs
            >
              Non-Receiving Members
            </CTab>
          </CTabList>

          <CTabContent>
            <CTabPane itemKey={1}>
              {/* Tab for All Members */}
              <h4>All Members</h4>
            </CTabPane>
            <CTabPane itemKey={2}>
              {/* Tab for Receiving Members */}
              <h4>Receiving Members</h4>
            </CTabPane>
            <CTabPane itemKey={3}>
              {/* Tab for Non-Receiving Members */}
              <h4>Non-Receiving Members</h4>
            </CTabPane>
          </CTabContent>
        </CTabs>

        {/* Search Inputs with Icons */}
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <FiSearch /> {/* Leading search icon */}
          </CInputGroupText>
          <CFormInput
            placeholder="Search by First Name"
            value={searchFirstName}
            onChange={(e) => setSearchFirstName(e.target.value)}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>
            <FiSearch /> {/* Leading search icon */}
          </CInputGroupText>
          <CFormInput
            placeholder="Search by Mobile Number"
            value={searchMobile}
            onChange={(e) => setSearchMobile(e.target.value)}
          />
        </CInputGroup>

        {/* Table to display filtered members */}
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
            {filteredMembers.map((member) => (
              <CTableRow key={member.id}>
                <CTableHeaderCell scope="row">{member.id}</CTableHeaderCell>
                <CTableDataCell>{member.firstName}</CTableDataCell>
                <CTableDataCell>{member.lastName || '-'}</CTableDataCell>
                <CTableDataCell>{member.mobile}</CTableDataCell>
                <CTableDataCell>{member.email}</CTableDataCell>
                <CTableDataCell>
                  <CDropdown alignment="end">
                    <CDropdownToggle color="success" style={{ color: '#fff', fontWeight: 'bold' }}>
                      Action
                    </CDropdownToggle>
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
