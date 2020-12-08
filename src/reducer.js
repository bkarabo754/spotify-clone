export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDN5aEunWSfyAkBebDTCQfRcPJDpgc93VoRqUKD6vMwpjLzVSheh5eDcIFfkST5Lv2RhfYJSJmZsU7gtvPv4udS2dhL0uAMLp-OSs9mC6C1xgKvlKZ3XfzzJod7a758VEM31nMdha3pFFc8VPQsTHsOyHpglw3MVDruoO_E3CXxfZEJ',
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
        
        case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        }
        
        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }
        
        
        default: 
        return state;
    }
    
}

export default reducer;