// I want to create User Store on Penia 
import { defineStore } from 'penia';

export const useUserStore = defineStore({
    id: 'UserStore',
    state: () => ({
        name: 'Penia'
    }),
    getters: {
        getName(state) {
            return state.name;
        }
    },
    actions: {
        setName({ state }, name) {
            state.name = name;
        }
    }
});
