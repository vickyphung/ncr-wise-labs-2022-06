import EmployeeListItem from "./EmployeeListItem";


import employeeArr from "../data";

console.log(employeeArr)

const employees = employeeArr.map((ele, idx) => {
  console.log("Employee List")
  return (
    <div className="list">
    <EmployeeListItem
      key={idx}
      img={ele.img}
      alt={ele.alt}
      name={ele.name}
      role={ele.role}
    />
</div>
  );
});

console.log(employees);

export default function EmployeeList() {
  return (
    <div className="App">
      <section className="employees">{employees}</section>
    </div>
  );
}
