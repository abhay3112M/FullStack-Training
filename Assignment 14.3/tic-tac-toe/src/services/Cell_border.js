export const cellBorder=(id)=>{
    const result={
        bl:1,
        bt:1,
        br:1,
        bb:1
    };
    switch(id) {
        case 0:
            result.bl =0;
            result.bt =0;
            break;
        case 1:
            result.bt =0;
            break;
        case 2:
            result.bt =0;
            result.br =0;
            break;
        case 3:
            result.bl =0
            break;
        case 5:
            result.br =0
            break;
        case 6:
            result.bl =0
            result.bb =0
            break;
        case 7:
            result.bb =0
            break;
        case 8:
            result.br =0
            result.bb =0
            break;
    }
    return result;
}