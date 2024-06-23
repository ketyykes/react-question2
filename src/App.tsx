import React from "react";

import isBetween from "dayjs/plugin/isBetween";
import weekday from "dayjs/plugin/weekday";
import dayjs from "dayjs";
import Calendar from "./components/Calendar/Calendar";

dayjs.extend(weekday);
dayjs.extend(isBetween);
const App: React.FC = () => {
	return <Calendar />;
};

export default App;
