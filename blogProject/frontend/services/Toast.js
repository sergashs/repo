// import { message } from "ant-design-vue";

// class Toast {
// 	constructor() {
// 		message.config({
// 			duration: 2
// 		});
// 	}

// 	success(text) {
// 		message.success(text);
// 	}

// 	error(text) {
// 		message.error(text);
// 	}

// 	warning(text) {
// 		message.warning(text);
// 	}
// }

// const useToast = new Toast();

// export default useToast;

import { message } from "ant-design-vue";

message.config({
	duration: 2
});

export default {
	success: (text) => {
		message.success(text);
	},

	error: (text) => {
		message.error(text);
	},

	warning: (text) => {
		message.warning(text);
	},
}