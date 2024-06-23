import dayjs from "dayjs";
import DayButton from "../DayButton/DayButton";

interface BodyProps {
	days: dayjs.Dayjs[];
	checkDateSelection: (date: dayjs.Dayjs) => boolean;
	handleDayClick: (clickedDate: dayjs.Dayjs) => void;
	currentMonth: dayjs.Dayjs;
}
const Body: React.FC<BodyProps> = ({
	days,
	checkDateSelection,
	handleDayClick,
	currentMonth,
}) => {
	return (
		<>
			{days.map((date, index) => {
				const isAllowed = date.month() === currentMonth.month();
				return (
					<DayButton
						key={index}
						date={date}
						onDayClick={handleDayClick}
						isAllowed={isAllowed}
						isSelected={checkDateSelection(date)}
					/>
				);
			})}
		</>
	);
};

export default Body;
