import './BanknoteVars.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  replaceArray } from '../redux/vars-reducer';

let varsStore = {
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

let BanknoteVars = () => {
    /*varsChange(varsStore.var2)*/
    const dispatch = useDispatch()
    const varsChange = (varArr) => {
        dispatch(replaceArray(varArr))
    }
    return (
        <div className="var-buttons">
            <button onClick={()=>varsChange(varsStore.var1)}>
                1. Купюры 5000 = 100; 2000 = 400; 1000 = 1000; 500 = 3000; 200 = 5000; 100 = 8000; 50 = 10000
            </button>
            <button onClick={()=>varsChange(varsStore.var2)}>
                2. Купюры 5000 = 476; 2000 = 345; 1000 = 6741; 500 = 4362; 200 = 234; 100 = 1643; 50 = 3450
            </button>
            <button onClick={()=>varsChange(varsStore.var3)}>
                3. Купюры 5000 = 234; 2000 = 678; 1000 = 845; 500 = 2451; 200 = 9654; 100 = 2345; 50 = 234
            </button>
            <button onClick={()=>varsChange(varsStore.var4)}>
                4. Купюры 5000 = 546; 2000 = 562; 1000 = 2543; 500 = 4365; 200 = 2154; 100 = 124; 50 = 342
            </button>
            <button onClick={()=>varsChange(varsStore.var5)}>
                5. Купюры 5000 = 2732; 2000 = 347; 1000 = 479; 500 = 7556; 200 = 3296; 100 = 1257; 50 = 3854
            </button>
            <button onClick={()=>varsChange(varsStore.var6)}>
                6. Купюры 5000 = 73; 2000 = 147; 1000 = 279; 500 = 356; 200 = 696; 100 = 857; 50 = 854
            </button>
        </div>
    )
}

export default BanknoteVars;