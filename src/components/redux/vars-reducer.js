const VARS = 'APP/VARS';

let initialState = {
    var: [
        {nv: 5000, q: 100},
        {nv: 2000, q: 400},
        {nv: 1000, q: 1000},
        {nv: 500, q: 3000},
        {nv: 200, q: 5000},
        {nv: 100, q: 8000},
        {nv: 50, q: 10000}
    ]
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