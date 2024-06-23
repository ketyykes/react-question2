import dayjs from "dayjs";

import styles from "./dayButton.module.css";

interface DayButtonProps {
	date: dayjs.Dayjs;
	onDayClick: (date: dayjs.Dayjs) => void;
	isSelected: boolean;
	isAllowed: boolean;
}

const DayButton: React.FC<DayButtonProps> = ({
	date,
	onDayClick,
	isSelected,
	isAllowed,
}) => {
	const { dayButton, selected, notAllowed, today } = styles;
	const isToday = dayjs().isSame(date, "day");

	const handleClick = () => {
		onDayClick(date);
	};

	return (
		<button
			className={`${dayButton} 
                  ${isSelected ? selected : ""} 
                  ${isAllowed ? "" : notAllowed} 
                  ${isToday && !isSelected ? today : ""}`}
			onClick={handleClick}
			disabled={!isAllowed}
		>
			{date.date()}
		</button>
	);
};

export default DayButton;
