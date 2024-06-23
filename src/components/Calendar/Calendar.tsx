import { useState } from "react";
import dayjs from "dayjs";
import Header from "./Header/Header";
import Body from "./Body/Body";

import Layout from "./Layout/Layout";
const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(dayjs());
	const [selectedRange, setSelectedRange] = useState<{
		start: dayjs.Dayjs | null;
		end: dayjs.Dayjs | null;
	}>({ start: null, end: null });

	const handleDayClick = (clickedDate: dayjs.Dayjs) => {
		const newDate = dayjs(clickedDate);
		if (selectedRange.start && !selectedRange.end) {
			if (newDate.isBefore(selectedRange.start, "day")) {
				setSelectedRange({ start: null, end: null });
				return;
			}
			setSelectedRange({ start: selectedRange.start, end: newDate });
			return;
		}
		setSelectedRange({ start: newDate, end: null });
	};

	const handlePrevMonth = () => {
		setCurrentMonth(currentMonth.subtract(1, "month"));
	};

	const handleNextMonth = () => {
		setCurrentMonth(currentMonth.add(1, "month"));
	};

	const generateDays = () => {
		const startOfMonth = currentMonth.startOf("month");
		const startDay = startOfMonth.subtract(
			startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1,
			"day"
		);
		return Array.from({ length: 35 }, (_, i) => dayjs(startDay).add(i, "day"));
	};

	const days = generateDays();
	const checkDateSelection = (date: dayjs.Dayjs) => {
		return !!(
			(selectedRange.start && date.isSame(selectedRange.start, "day")) ||
			(selectedRange.end &&
				date.isBetween(selectedRange.start, selectedRange.end, "day", "[]"))
		);
	};
	return (
		<Layout>
			<Header
				currentMonth={currentMonth}
				onPrevMonthClick={handlePrevMonth}
				onNextMonthClick={handleNextMonth}
			/>
			<Body
				days={days}
				checkDateSelection={checkDateSelection}
				handleDayClick={handleDayClick}
				currentMonth={currentMonth}
			/>
		</Layout>
	);
};

export default Calendar;
