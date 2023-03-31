import * as uuid from "uuid";
import * as path from "path";

export default {
	saveFIle(file) {
		if (!file) {
			throw new Error("No file provided");
		}
		try {
			const fileName = uuid.v4() + ".jpg";
			const filePath = path.resolve('static', fileName);
			file.mv(filePath);
			return fileName;
		} catch (e) {
			console.log(e);
		}
	}
}

