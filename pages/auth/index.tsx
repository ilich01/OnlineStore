import SignUp from "../../components/Auth/SignUp/SignUp";
import Header from "../../components/Header/Headr";

const AuthPage = ({ countries }) => {
  return (
    <>
      <Header />
      <SignUp countries={countries} />
    </>
  );
};
export default AuthPage;
export async function getStaticProps() {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states"
  );
  const countries = await response.json();

  return {
    props: { countries },
  };
}
