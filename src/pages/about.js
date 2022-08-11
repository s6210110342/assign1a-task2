import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import './css/button.css'
import Seo from "../components/seo"

export const Head = () => <Seo title="เกี่ยวกับเรา" />
const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <div className="container  my-5">
    <div className="container">
        <h1>คณะผู้จัดทำ</h1>
        <p>
          <ul>
            {/* 1 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว ศิขรินทร์ สามงามทอง</li> 
                 <b>รหัสนักศึกษา: </b> 6210110342
            {/* 2 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว สะอาดะห์ ดายันตา</li> 
                 <b>รหัสนักศึกษา: </b> 6210110362
            {/* 3 */}
            <li> <b>ชื่อ-สกุล: </b> นาย ไกรวิชญ์ เสนาสุ</li>
                 <b>รหัสนักศึกษา: </b> 6210110636
            {/* 4 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว สาวศุภาพิชญ์ จรูญศักด์</li>    
                 <b>รหัสนักศึกษา: </b> 6210110695
            {/* 5 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว ฟาเดีย หวังหลิ่ม</li> 
                 <b>รหัสนักศึกษา: </b> 6210110723
          </ul>
        </p>
        <p>Link URL Github <a href="https://github.com/s6210110342/assign1a-task2" target="_blank" rel="noopener noreferrer">here...</a></p>
    </div>
    <Link to="/">หน้าแรก</Link>
    </div>
  </Layout>
)


export default AboutPage
