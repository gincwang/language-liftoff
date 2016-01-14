import alt from '../alt.js';

class NavigationActions {
	updateSelectedNav(tab) {
		return tab;
	}
	updateHideDropDown(drop) {
		return drop;
	}
	updateHideMobileNav(val) {
		return val;
	}
}

export default alt.createActions(NavigationActions);