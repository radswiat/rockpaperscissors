/**
 * Manage app views
 * - abstract document methods in case we would
 * 	 implement something else in future ( like jquery )
 * @class
 */
class View {

	/**
	 * Clear all views
	 * - selector: .view
	 */
	clear() {
		let views = document.getElementsByClassName('view');
		for (let view of views) {
			view.style.display = 'none';
		}
	}

	/**
	 * Show view by id
	 * @param screenHtmlId
	 * @return {boolean}
	 */
	show(screenHtmlId) {
		let element = document.getElementById(screenHtmlId);
		if (!element) {
			return false;
		}
		element.style.display = 'block';
		return true;
	}

	/**
	 * Hide view by id
	 * @param screenHtmlId
	 */
	hide(screenHtmlId) {
		let element = document.getElementById(screenHtmlId);
		if (!element) {
			return false;
		}
		element.style.display = 'none';
		return true;
	}

	/**
	 * Get view html content
	 * @param screenHtmlId
	 */
	getContent(screenHtmlId) {
		return document.getElementById(screenHtmlId) || null;
	}

}

export default new View();
