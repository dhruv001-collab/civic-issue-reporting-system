import React from "react";
import LeftSection from "../../components/leftSectionReportsDetails/LeftSection";
import RightSection from "../../components/RightSectionReportsDetails/RightSection";
import Nav from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { DummyCommentsData, DummyReportsData} from "../../DummyReportsData/DummyReportsData";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";

const ReportsDetails = () => {
  const { setAllproducts, allproducts } = useContext(AppContext);

  const fetchinfo = async () => {
    await fetch('http://localhost:5000/allIssues').then((res) => res.json()).then((data) => setAllproducts(data))
  }


  useEffect(() => {
    fetchinfo();
  }, []);

  useEffect(() => {
    console.log("Updated allproducts:", allproducts);
  }, [allproducts]);

  const { id } = useParams();
  const report = allproducts.find((r) => r._id === parseInt(id));
  const commentsData = DummyCommentsData.find(
    (c) => c.reportId === parseInt(id)
  );
  return (
    <>
      <Nav />
      <section className="flex flex-col md:flex-row gap-6 pt-3 lg:px-8">
        <LeftSection report={report} />
        <RightSection report={report} />
      </section>
      <Footer />
    </>
  );
};

export default ReportsDetails;
