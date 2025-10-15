import Image from "next/image";
import styles from "./page.module.css";
import {SearchParamsInput} from "@/components/searchParamsInput/searchParamsInput";
import MainPageHeader from "@/components/header/mainPage/mainPageHeader";
import HeadingSection from "@/components/headingSection/headingSection";
import CurtainSection from "@/components/curtainSection/curtainSection";
import DescriptionSection from "@/components/descriptionSection/decsriptionSection";
import Gallery from "@/components/gallery/gallery";
import {Line1} from "@/components/lines/line1/line1";
import {Line2} from "@/components/lines/line2/line2";

export default function Home() {
  return (
    <>
        <MainPageHeader/>
      <main id={styles.main}>
          <Line1 />
          <HeadingSection />
          <Line2 />
          <CurtainSection />
          <DescriptionSection />
          <Gallery />
      </main>
      {/*<footer>*/}
      {/*  footer*/}
      {/*</footer>*/}
    </>
  );
}
