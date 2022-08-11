import * as React from "react"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import './css/button.css'
import Seo from "../components/seo"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#909497',
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Head = () => <Seo title="ผลการลงทะเบียน" />
const EnrollmentsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      directus {
        Member {
          id, firstname, surname
        }
        Course {
          id, subject_name, day, start_time, end_time
        }
        Enrollment {
          id
          member_id {
            id, firstname, surname
          }
          course_id {
            id, subject_name, day, start_time, end_time
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1 align="center">ผลการลงทะเบียนเรียนของนักศึกษาทั้งหมด</h1>
      <div className="table">
        <TableContainer componebt={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <StyledTableCell align="center">รหัสนักศึกษา</StyledTableCell>
                  <StyledTableCell align="center">ชื่อ</StyledTableCell>
                  <StyledTableCell align="center">นามสกุล</StyledTableCell>
                  <StyledTableCell align="center">รหัสวิชา</StyledTableCell>
                  <StyledTableCell align="center">ชื่อวิชา</StyledTableCell>
                  <StyledTableCell align="center">วัน</StyledTableCell>
                  <StyledTableCell align="center">เริ่มเวลา</StyledTableCell>
                  <StyledTableCell align="center">เสร็จเวลา</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
              { data.directus.Enrollment.map((enrollment) => (
                <StyledTableRow key={enrollment.id}>
                  <StyledTableCell align="center"> { enrollment.member_id.id } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.member_id.firstname } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.member_id.surname } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.course_id.id } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.course_id.subject_name } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.course_id.day } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.course_id.start_time } </StyledTableCell>
                  <StyledTableCell align="center"> { enrollment.course_id.end_time } </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <form action="/">
        <button class="button"><span>หน้าแรก</span></button>
      </form>
    </Layout>
  )
}

export default EnrollmentsPage
