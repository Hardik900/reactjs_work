import React,{forwardRef} from 'react';
// import Forward_Ref from './Forward_Ref';

function Forward_Ref_child(props,ref){
    // console.log(ref,"ref")
    return(
        <>
            <input type="text" ref={ref} />
        </>
    )

}
export default forwardRef(Forward_Ref_child);