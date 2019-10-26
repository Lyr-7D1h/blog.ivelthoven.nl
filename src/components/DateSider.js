import React from "react";
import { Menu, Icon, Layout } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default ({ dates }) => {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const years = [];
  const months = [];
  dates.forEach(date => {
    !(years.indexOf(date.getFullYear()) === -1) ||
      years.push(date.getFullYear());

    !(months.indexOf(date.getMonth()) === -1) || months.push(date.getMonth());
  });

  console.log(years, months);

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {years.map((year, yearIndex) => (
          <SubMenu
            key="index"
            title={
              <span>
                <Icon type="snippets" />
                {year}
              </span>
            }
          >
            {months.map((month, monthIndex) => (
              <Menu.Item key={monthIndex}>{monthNames[month]}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};
