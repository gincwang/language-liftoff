import alt from '../alt.js';

class NavigationActions {
	updateSelectedNav(tab) {
		console.log("action: " + tab);
		return tab;
	}
	updateHideDropDown(drop) {
		return drop;
	}
}

export default alt.createActions(NavigationActions);