import React from 'react'

const CenterdVideoSlider = ({ videSrc }) => {
    return (
        <div style={{height:400}}>
            <iframe width={"90%"} height={"100%"} src={videSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default CenterdVideoSlider