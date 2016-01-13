import alt from '../alt.js';

class NavigationActions {
	updateSelectedNav(tab) {
		console.log("action: " + tab);
		sessionStorage.setItem('selectedTab', tab);
		return tab;
	}
	updateHideDropDown(drop) {
		return drop;
	}
}

export default alt.createActions(NavigationActions);