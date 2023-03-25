<template>
	<div class="p-4">
		<div class="flex items-center justify-between pb-4">
			<h2 class="font-medium">{{ currentMonthUa }}</h2>
			<div class="flex">
				<button class="bg-blue-600 px-3 py-1 border-rounded text-white hover:bg-blue-700" @click="prevMonth">Prev</button>
				<button class="bg-blue-600 px-3 py-1 border-rounded text-white hover:bg-blue-700" @click="nextMonth">Next</button>
			</div>
		</div>
		<table class="w-full">
			<thead class="border-b border-gray-200 border">
				<tr>
					<th v-for="day in weekDays" :key="day" class="p-2 border-r">{{ day }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(week, index) in weeks" :key="index" class="text-center">
					<td v-for="(day, dayIndex) in week" :key="dayIndex" :class="[day.isCurrentMonth ? null : 'text-gray-300', day.events.length > 0 ? 'bg-blue-100' : null]" @click="clickOnDay(day)" class="py-8 border">
						{{ day.date || "" }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { startOfWeek, endOfWeek, isSameMonth, startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

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
			weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
			currentMonthUa: ""
		};
	},
	methods: {
		prevMonth() {
			this.generateCalendar(new Date(this.date.setMonth(this.date.getMonth() - 1)));
		},
		nextMonth() {
			this.generateCalendar(new Date(this.date.setMonth(this.date.getMonth() + 1)));
		},
		generateCalendar(date) {
			// const londonDate = formatInTimeZone(date, "Europe/London", "yyyy-MM-dd'T'HH:mm:ss.SSS");
			// const currentDate = new Date(londonDate);

			// this.currentMonth = format(currentDate, "MMMM yyyy");
			// this.currentMonthUa = currentDate.toLocaleDateString(undefined, { month: "long", year: "numeric" });
			// const startOfMonthDate = startOfMonth(currentDate);
			// const endOfMonthDate = endOfMonth(currentDate);
			// const startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
			// const endOfWeekDate = endOfWeek(endOfMonthDate, { weekStartsOn: 1 });
			// const days = eachDayOfInterval({
			// 	start: startOfWeekDate,
			// 	end: endOfWeekDate
			// });
			// const weeks = [];
			// let week = [];
			// let countWeekDay = 0;

			// days.forEach((day) => {
			// 	week.push({
			// 		date: format(day, "dd"),
			// 		isCurrentMonth: isSameMonth(day, startOfMonthDate)
			// 	});

			// 	countWeekDay++;

			// 	if (countWeekDay === 7) {
			// 		weeks.push(week);
			// 		countWeekDay = 0;
			// 		week = [];
			// 	}
			// });
			// weeks.push(week);
			// this.weeks = weeks;

			const londonDate = formatInTimeZone(date, "Europe/London", "yyyy-MM-dd'T'HH:mm:ss.SSS");
			const currentDate = new Date(londonDate);
			this.currentMonth = format(currentDate, "MMMM yyyy");
			this.currentMonthUa = currentDate.toLocaleDateString(undefined, { month: "long", year: "numeric" });

			// Add the event to the calendar
			const eventStart = new Date("2023-03-26T14:00:00+02:00");
			const eventEnd = new Date("2023-03-26T15:00:00+02:00");

			const startOfMonthDate = startOfMonth(currentDate);
			const endOfMonthDate = endOfMonth(currentDate);
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
					isCurrentMonth: isSameMonth(day, startOfMonthDate),
					events: []
				});

				if (isSameDay(day, eventStart)) {
					week[week.length - 1].events.push({
						start: eventStart,
						end: eventEnd
					});

					console.log(week[week.length - 1]);
				}

				countWeekDay++;

				if (countWeekDay === 7) {
					weeks.push(week);
					countWeekDay = 0;
					week = [];
				}
			});

			weeks.push(week);
			this.weeks = weeks;
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
