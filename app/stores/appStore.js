import { action, observable } from 'mobx';

class AppStore {
    @observable avatarUrl;

    constructor() {
        this.avatarUrl = 'test';
    }
    
}

const appStore = new AppStore();

export default appStore;
export { AppStore };
