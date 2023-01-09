import React from "react";
import Layout from "../components/layout";

const LegalNotice = () => {
  return (
    <Layout>
      <article className="full-content">
        <section className="post-content" style={{ marginBottom: "3rem" }}>
          <h1>Legal Notice</h1>
          <p>
            {" "}
            Access to and use of the HealthyRel is subject to these general
            terms and conditions and applicable law.
          </p>
          <p>
            Access to HealthyRel is free of charge and does not require prior
            registration. However, the Owner reserves the right to limit access
            to certain sections of HealthyRel to users who have registered in
            advance.
          </p>
          <p>
            Use of HealthyRel implies full and unreserved acceptance of each and
            every one of these general terms and conditions. If the user does
            not agree with them, he/she must refrain from using HealthyRel.
          </p>
          <p>
            The Owner reserves the right to modify these general terms and
            conditions at any time, as well as any other aspect of HealthyRel.
          </p>
          <p>
            The content of HealthyRel is protected by intellectual and
            industrial property regulations, and the Owner holds all rights to
            it.
          </p>
          <p>
            The Owner shall not be liable for damages of any nature that may
            arise from incorrect, inappropriate or unlawful use of HealthyRel
            and its content.
          </p>
          <p>
            The Owner does not guarantee the availability and continuity of the
            operation of HealthyRel and shall not be liable in the event of any
            interruption, failure, suspension or unavailability of HealthyRel.
          </p>
          <p>
            The Owner is not responsible for the contents, information, opinions
            and statements of any kind included in the links that may appear on
            HealthyRel, such contents being outside the Owner's control.
          </p>
          <p>
            HealthyRel may contain links to third party websites. These links
            are for information purposes only and in no case imply the existence
            of a relationship between the Owner and the owners of such websites.
          </p>
          <p>
            The Owner reserves the right to take legal action in the event of
            any breach of these general terms and conditions or any other
            applicable regulations.
          </p>
          <p>
            These general terms and conditions shall be governed by and
            construed in accordance with Spanish law. For any litigious matter
            that may arise from access and/or use of HealthyRel, the parties
            submit to the Courts and Tribunals, waiving any other jurisdiction
            that may correspond to them.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default LegalNotice;
