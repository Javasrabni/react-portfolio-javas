import { useState } from "react"
import { MobileModeContext } from '../../MediaQuerry/MobileMode'
import { useContext } from 'react'

export default function Education({NameSchool, DetailSchool, SchoolLogo, YearSchool, DirectLinkSchool}) {
    const MobileMode = useContext(MobileModeContext)

    function HandleDirectLink() {
        window.open(DirectLinkSchool)
    }

    const [onTouch, setTouch] = useState(false)

    const Education = {
        display: "flex",
        width: "100%",
        height: '100%',
        flexDirection: "row",
    }
    const ContainerSchoolLogo = {
        width: "3rem", height: "3rem", backgroundColor: "var(--foreground)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100px", flexShrink: '0'
    }
    const WrappingContainerSch = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: "16px",
    }
    
    return (
        <div style={Education} onClick={HandleDirectLink} onMouseOver={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)} >
            <div style={WrappingContainerSch}>
                <div style={ContainerSchoolLogo}>
                    <img src={SchoolLogo} alt="" width={'80%'} height={'80%'} style={{ borderRadius: "100px", objectFit: "cover", }} />
                </div>
                <div style={{display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
                        <div style={{display: "flex", flexDirection: "column",}}>
                            <h3 style={{lineHeight: '1.25rem', fontSize: MobileMode ? "12px" : "14px", fontWeight: "600"}}>{NameSchool}</h3>
                            <p style={{fontSize: MobileMode ? "12px" : "14px", marginTop: "8px"}}>{DetailSchool}</p>
                        </div>
                        <div className="HoverEdu" style={{marginLeft: "14px"}}>
                            {onTouch && (
                                <i  class="fa-solid fa-chevron-right" style={{color: 'var(--foreground)', fontSize: "12px"}}></i>
                            )}
                        </div>
                    </div>
                    <div style={{flexShrink: '0'}}>
                        <p style={{fontSize: MobileMode ? "12px" : "14px"}}>{YearSchool}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}