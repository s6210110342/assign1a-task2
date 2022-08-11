import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const Head = () => <Seo title="ลงทะเบียนเรียน" />
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <StaticImage
            src="../images/welcome.jpg"
            // width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="welcome"
            className="img-fluid"
          />
          <h1 className="fw-light">สวัสดีนักศึกษาทุกคน</h1>
          <p className="lead text-muted">ยินดีต้อนรับการลงทะเบียนเรียนของนักศึกษาทั้งหมดในเทอมนี้</p>

        </div>
      </div>
      <div className="row">
        <Link to="/members/" className="btn btn-primary my-2">รายชื่อนักศึกษาทั้งหมด</Link>
        <Link to="/courses/" className="btn btn-primary my-2">วิชาทั้งหมดที่เปิดสอน</Link>
        <Link to="/enrollment/" className="btn btn-primary my-2">ผลการลงทะเบียน</Link>
        <Link to="/about/" className="btn btn-primary my-2">เกี่ยวกับเรา</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
