import alt from "../alt";
import NavigationActions from "../actions/NavigationActions";

//NavigationStore will store the nav bar status
class NavigationStore {
	constructor(){
		//handles page refresh to not direct to other page in nav UI
		this.hasSessionStorage = checkStorage('sessionStorage');
		if(this.hasSessionStorage){
			if(!sessionStorage.getItem('selectedTab')) {
				this.selectedTab = "HOME";
				sessionStorage.setItem('selectedTab', 'HOME');
			}
			this.selectedTab = sessionStorage.getItem('selectedTab');
		}else {
			this.selectedTab = "HOME";
		}
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
		if(this.hasSessionStorage){
			sessionStorage.setItem('selectedTab', tab);
		}
		this.selectedTab = tab;
	}
	handleUpdateHideDropDown(drop) {
		this.hideDropDown = drop;
	}
	handleUpdateHideMobileNav(val) {
		this.hideMobileNav = val;
	}
}

export default alt.createStore(NavigationStore, 'NavigationStore');

function checkStorage(type) {
	try {
		let storage = window[type];
		let x = '_try_';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} 
	catch(e) {
		return false;
	}
}