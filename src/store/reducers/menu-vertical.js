const MENU_VERTICAL_ON = false;

export default function MenuVerticalReducer(state = MENU_VERTICAL_ON, action){

    switch (action.type) {
        case 'HANDLE_MENU':
            return action.value;
        default:
            break;
    }
    
    return state;
}