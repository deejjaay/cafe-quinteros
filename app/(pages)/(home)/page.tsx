import DiscoverOurMenuPage from "./_sections/DiscoverableMenu";
import MenuItemPage from "../(home)/_components/MenuItem";
import WhyChooseUsPage from "./_sections/WhyChooseUs";
import WordsFromCustomersPage from "./_sections/WordsFromCustomers";
import FAQPage from "./_sections/FAQ";
import JoinOurCommunityPage from "./_sections/JoinOurCommunity";
import HeroPage from "./_sections/Hero";

export default function Home() {
  return (
    <>
      <HeroPage />
      {/* <DiscoverOurMenuPage />
      <WhyChooseUsPage />
      <WordsFromCustomersPage /> */}
      <FAQPage />
      {/* <JoinOurCommunityPage /> */}
    </>
  );
}
