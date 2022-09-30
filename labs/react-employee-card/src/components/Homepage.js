import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Homepage() {
  console.log("Homepage")
    return (
      <div className="home">
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
    );
  }