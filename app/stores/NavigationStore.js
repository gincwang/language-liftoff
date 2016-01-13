import alt from "../alt";
import NavigationActions from "../actions/NavigationActions";

//NavigationStore will store the nav bar status
class NavigationStore {
	constructor(){
		if(!sessionStorage.getItem('selectedTab')) {
			this.selectedTab = "HOME";
			sessionStorage.setItem('selectedTab', 'HOME');
		}
		this.selectedTab = sessionStorage.getItem('selectedTab');
		this.hideDropDown = true;
		this.hideMobileNav = true;

		//bind action handler to actions
		this.bindListeners({
			handleUpdateNavigation: NavigationActions.UPDATE_SELECTED_NAV,
			handleUpdateHideDropDown: NavigationActions.UPDATE_HIDE_DROP_DOWN,
			handleUpdateHideMobileNav: NavigationActions.UPDATE_HIDE_MOBILE_NAV
		});
	}
	handleUpdateNavigation(tab) {
		console.log("store: " + tab);
		this.selectedTab = tab;
	}
	handleUpdateHideDropDown(drop) {
		console.log("store: " + drop);
		this.hideDropDown = drop;
	}
	handleUpdateHideMobileNav(val) {
		console.log("store: hideMobileNav: " + val);
		this.hideMobileNav = val;
	}
}

export default alt.createStore(NavigationStore, 'NavigationStore');