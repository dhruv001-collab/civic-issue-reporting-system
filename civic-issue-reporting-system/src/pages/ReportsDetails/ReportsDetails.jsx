import React from "react";
import LeftSection from "../../components/leftSectionReportsDetails/LeftSection";
import RightSection from "../../components/RightSectionReportsDetails/RightSection";
import Nav from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import {
  DummyCommentsData,
  DummyReportsData,
} from "../../DummyReportsData/DummyReportsData";
import Footer from "../../components/Footer/Footer";

const ReportsDetails = () => {
  const { id } = useParams();
  const report = DummyReportsData.find((r) => r.id === parseInt(id));
  const commentsData = DummyCommentsData.find(
    (c) => c.reportId === parseInt(id)
  );
  return (
    <>
      <Nav />
      <section className="flex flex-col md:flex-row gap-6 pt-3 lg:px-8">
        <LeftSection report={report} />
        <RightSection comments={commentsData?.comments || []} />
      </section>
      <Footer/>
    </>
  );
};

export default ReportsDetails;
