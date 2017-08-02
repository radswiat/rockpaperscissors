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
	 */
	show(screenHtmlId) {
		document.getElementById(screenHtmlId).style.display = 'block';
	}

	/**
	 * Hide view by id
	 * @param screenHtmlId
	 */
	hide(screenHtmlId) {
		document.getElementById(screenHtmlId).style.display = 'block';
	}

	/**
	 * Get view html content
	 * @param screenHtmlId
	 */
	getContent(screenHtmlId) {
		return document.getElementById(screenHtmlId);
	}

}

export default new View();
