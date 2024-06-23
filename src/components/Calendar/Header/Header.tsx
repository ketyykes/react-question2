import dayjs from "dayjs";

import MonthSelect from "../MonthSelect/MonthSelect";

import styles from "./header.module.css";

interface HeaderProps {
	currentMonth: dayjs.Dayjs;
	onPrevMonthClick: () => void;
	onNextMonthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
	currentMonth,
	onPrevMonthClick,
	onNextMonthClick,
}) => {
	const { header } = styles;

	return (
		<div className={header}>
			<MonthSelect
				month={currentMonth}
				onPrevMonthClick={onPrevMonthClick}
				onNextMonthClick={onNextMonthClick}
				nextMonthDisabled={false}
				prevMonthDisabled={false}
			/>
		</div>
	);
};

export default Header;
