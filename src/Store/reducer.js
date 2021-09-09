const initialState = {
    currentPassword: '',
    password: '4524',
    inputStyle: 'textarea ',
};

const reducer = (state = initialState, action) => {
    if (state.currentPassword.length < 4) {
        if (action.type === 'ADD') {
            return {...state, currentPassword: state.currentPassword + action.payload}
        }
    }

    if (action.type === 'REMOVE') {
        return {...state, currentPassword: state.currentPassword.substr(0, state.currentPassword.length - 1)}
    }

    if (action.type === 'CLEAR') {
        return {...state, currentPassword: ''}
    }

    if (action.type === 'CHANGE') {
        return {...state, inputStyle: action.payload}
    }

    return state;
};

export default reducer;