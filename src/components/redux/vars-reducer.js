const VARS = 'APP/VARS';

let initialState = {
    var: {5000: 100,
        2000: 400,
        1000: 1000,
        500: 3000,
        200: 5000,
        100: 8000,
        50: 10000}
}

const varsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VARS:
            let varsArray = action.newArray
            return{
                var: varsArray
            }
        default:
            return state;
    }
}

//action creator
export const replaceArray = (newArray) => ({type: 'APP/VARS', newArray})

export default varsReducer;