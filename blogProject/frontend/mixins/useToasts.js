import { message } from "ant-design-vue";

export default function useToast() {

	message.config({
		duration: 2,
	});

	const success = (text) => {
		message.success(text);
	};
	const error = (text) => {
		message.error(text);
	};
	const warning = (text) => {
		message.warning(text);
	};

	return {
		success,
		error,
		warning
	}
}