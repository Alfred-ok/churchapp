import {
  CCard,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Members = () => {
  return (
    <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)', color:"blue", padding:"20px"}}>
    <CCardHeader style={{ backgroundColor: '#fff' }}>
        <h3>CHURCH MEMBERS</h3>
    </CCardHeader>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Class</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>Mark</CTableDataCell>
          <CTableDataCell>Otto</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">2</CTableHeaderCell>
          <CTableDataCell>Jacob</CTableDataCell>
          <CTableDataCell>Thornton</CTableDataCell>
          <CTableDataCell>@fat</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
          <CTableDataCell>@twitter</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>     
    </CCard>
  )
}

export default Members
