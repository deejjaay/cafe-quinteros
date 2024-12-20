import DiscoverOurMenuPage from "./_sections/DiscoverableMenu";
import WhyChooseUsPage from "./_sections/WhyChooseUs";
import WordsFromCustomersPage from "./_sections/WordsFromCustomers";
import FAQPage from "./_sections/FAQ";
import JoinOurCommunityPage from "./_sections/JoinOurCommunity";
import HeroPage from "./_sections/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJs Exam",
  description: "Nextjs landing page exam",
};

export default function Home() {
  return (
    <>
      <HeroPage />
      <DiscoverOurMenuPage />
      <WhyChooseUsPage />
      <WordsFromCustomersPage />
      <FAQPage />
      <JoinOurCommunityPage />
    </>
  );
}
