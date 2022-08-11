import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
        <p>Link URL Github <a href="https://github.com/r-ichard" target="_blank" rel="noopener noreferrer">here...</a></p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default AboutPage
