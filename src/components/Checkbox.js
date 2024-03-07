import React from "react";

export const Checkbox = React.forwardRef(({indeterminate,...rest},ref)=>{
    const defaultRef = React.useRef()
    const resolveRef = ref || defaultRef;
    React.useEffect(()=>{
        resolveRef.current.indeterminate = indeterminate
    },[indeterminate,resolveRef])

    return (
        <input {...rest} ref={resolveRef} type="checkbox" />
    )
})