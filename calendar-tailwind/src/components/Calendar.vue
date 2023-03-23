<template>
	<div class="calendar">
		<h1 className="text-3xl font-bold underline">Hello world!</h1>
		<div class="calendar-header">
			<button @click="prevMonth">Prev</button>
			<h2>{{ currentMonth }}</h2>
			<button @click="nextMonth">Next</button>
		</div>
		<table class="calendar-table">
			<thead>
				<tr>
					<th v-for="day in weekDays" :key="day">{{ day }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(week, index) in weeks" :key="index">
					<td v-for="(day, dayIndex) in week" :key="dayIndex" :class="{ 'calendar-day': day }" @click="clickOnDay(day)">
						{{ day.date || "" }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { startOfWeek, endOfWeek, isSameMonth, startOfMonth, endOfMonth, eachDayOfInterval, format, parseISO } from "date-fns";

export default {
	name: "Calendar",
	props: {
		date: {
			type: Date,
			default: () => new Date()
		}
	},
	data() {
		return {
			currentMonth: "",
			weeks: [],
			weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		};
	},
	methods: {
		prevMonth() {
			const prevMonth = new Date(this.date.setMonth(this.date.getMonth() - 1));
			this.generateCalendar(prevMonth);
		},
		nextMonth() {
			const nextMonth = new Date(this.date.setMonth(this.date.getMonth() + 1));
			this.generateCalendar(nextMonth);
		},
		generateCalendar(date) {
			this.currentMonth = format(date, "MMMM yyyy");
			const startOfMonthDate = startOfMonth(date);
			const endOfMonthDate = endOfMonth(date);
			const startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
			const endOfWeekDate = endOfWeek(endOfMonthDate, { weekStartsOn: 1 });
			const days = eachDayOfInterval({
				start: startOfWeekDate,
				end: endOfWeekDate
			});
			const weeks = [];
			let week = [];
			let countWeekDay = 0;

			days.forEach((day) => {
				week.push({
					date: format(day, "dd"),
					isCurrentMonth: isSameMonth(parseISO(day), startOfMonthDate)
				});

				countWeekDay++;

				if (countWeekDay === 7) {
					weeks.push(week);
					countWeekDay = 0;
					week = [];
				}
			});
			weeks.push(week);
			this.weeks = weeks;

			console.log(weeks);
		},
		clickOnDay(day) {
			console.log(day);
		}
	},
	created() {
		this.generateCalendar(this.date);
	}
};
</script>

<style>
.calendar {
	font-family: sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
}

.calendar-table {
	border-collapse: collapse;
}

.calendar-table th,
.calendar-table td {
	padding: 0.5rem;
	text-align: center;
	border: 1px solid #ccc;
}

.calendar-table td {
	cursor: pointer;
}

.calendar-table td.calendar-day {
	background-color: #f5f5f5;
}

.calendar-table td.today {
	font-weight: bold;
}

.calendar-table td.selected {
	background-color: #d8d8d8;
}
</style>
