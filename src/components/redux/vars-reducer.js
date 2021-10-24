const VARS = 'APP/VARS';

let initialState = {
    var1: [
        {nv: 5000, q: 100},
        {nv: 2000, q: 400},
        {nv: 1000, q: 1000},
        {nv: 500, q: 3000},
        {nv: 200, q: 5000},
        {nv: 100, q: 8000},
        {nv: 50, q: 10000}
    ],
    var2: [
        {nv: 5000, q: 476},
        {nv: 2000, q: 345},
        {nv: 1000, q: 6741},
        {nv: 500, q: 4362},
        {nv: 200, q: 234},
        {nv: 100, q: 1643},
        {nv: 50, q: 3450}],
    var3: [
        {nv: 5000, q: 234},
        {nv: 2000, q: 678},
        {nv: 1000, q: 845},
        {nv: 500, q: 2451},
        {nv: 200, q: 9654},
        {nv: 100, q: 2345},
        {nv: 50, q: 234}],
    var4: [
        {nv: 5000, q: 546},
        {nv: 2000, q: 562},
        {nv: 1000, q: 2543},
        {nv: 500, q: 4365},
        {nv: 200, q: 2154},
        {nv: 100, q: 124},
        {nv: 50, q: 342}],
    var5: [
        {nv: 5000, q: 2732},
        {nv: 2000, q: 347},
        {nv: 1000, q: 479},
        {nv: 500, q: 7556},
        {nv: 200, q: 3296},
        {nv: 100, q: 1257},
        {nv: 50, q: 3854}],
    var6: [
        {nv: 5000, q: 73},
        {nv: 2000, q: 147},
        {nv: 1000, q: 279},
        {nv: 500, q: 356},
        {nv: 200, q: 696},
        {nv: 100, q: 857},
        {nv: 50, q: 854}],
}

const varsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VARS:
            return {...state}
        default:
            return state;
    }
}

//action creator
export const initializedVars = () => ({type: 'APP/VARS'})

export default varsReducer;