
const reducer = (state = { i: 0, tarAn: ' ', qCount: 0 }, action)=>{
    
    switch(action.type){
        case 'NEXTBTN':
            return { i : state.i + 1, tarAn: ' ', qCount: state.qCount };
        case 'TARGET':
            return {i : state.i, tarAn: action.payload, qCount: state.qCount};
        case 'QPLUS':
            return {i : state.i, tarAn: state.tarAn, qCount: state.qCount + 1};
        case 'WASH':
            return {i : state.i, tarAn: ' ', qCount: state.qCount};
        case 'WASHALL':
            return {i : 0, tarAn: ' ', qCount: 0};      
        default:
            return state;
        }
    
};



export default reducer;
