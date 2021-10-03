import React from "react";
import CalendarIcon from "react-calendar-icon";
import { ThemeProvider } from "styled-components";

const theme = {
  calendarIcon: {
    textColor: "white", // text color of the header and footer
    primaryColor: "#0da472", // background of the header and footer
    backgroundColor: "#fafafa"
  }
};

export default function Calendaricon(props) {
  return (
    <ThemeProvider theme={theme}>
      {/* ...  */}
      <CalendarIcon date={new Date()} />
    </ThemeProvider>
  );
}
