import React from 'react'
import { PiSpinner } from "react-icons/pi";

type Props = {}

const LoadingIcon = (props: Props) => {
    return (
        <div>
            <PiSpinner size={16} />
        </div>
    )
}

export default LoadingIcon