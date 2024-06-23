import dayjs from "dayjs";

import styles from "./monthSelect.module.css";

interface MonthSelectProps {
	month: dayjs.Dayjs;
	onPrevMonthClick: (month: dayjs.Dayjs) => void;
	onNextMonthClick: (month: dayjs.Dayjs) => void;
	prevMonthDisabled?: boolean;
	nextMonthDisabled?: boolean;
}

const MonthSelect: React.FC<MonthSelectProps> = ({
	month,
	onPrevMonthClick,
	onNextMonthClick,
	prevMonthDisabled,
	nextMonthDisabled,
}) => {
	const { monthSelect, pointEventsNone } = styles;

	const handlePrevMonth = () => {
		onPrevMonthClick(month);
	};

	const handleNextMonth = () => {
		onNextMonthClick(month);
	};

	return (
		<>
			<button
				className={`${monthSelect} ${prevMonthDisabled ? pointEventsNone : ""}`}
				onClick={handlePrevMonth}
			>
				&lt;
			</button>
			{dayjs(month).format("YYYY 年 M 月")}
			<button
				className={`${monthSelect} ${nextMonthDisabled ? pointEventsNone : ""}`}
				onClick={handleNextMonth}
			>
				&gt;
			</button>
		</>
	);
};

export default MonthSelect;
