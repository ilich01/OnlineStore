import useLayout from "../../components/Layout/Layout";
import UserInfo from "../../components/User/UserInfo/UserInfo";

const AuthPage = ({ countries }) => {
  return (
    <>
      <UserInfo countries={countries} />
    </>
  );
};
export default useLayout(AuthPage);
export async function getServerSideProps() {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states"
  );
  const countries = await response.json();

  return {
    props: { countries },
  };
}
