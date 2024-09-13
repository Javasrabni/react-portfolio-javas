import DevProject from "./Dev-Project"
import { useContext } from "react"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function UIProject() {
    const MobileMode = useContext(MobileModeContext)

    const Desktop = window.matchMedia(' (min-width: 1000px)')
    const DesktopMode = Desktop.matches

    const SpecialUI = {
        width: "500px",
        zIndex: "17",
        height: "fit-content",
        objectFit: 'cover',
        padding: MobileMode ? "40px 24px" : "40px 0px"
    }

    return (
        <div style={{width: "100%", height: "100%",}}>
            <div style={{flexShrink:'0', display: "flex", flexWrap: "wrap", gap: "12px", marginTop: DesktopMode ? "-60px" : "", justifyContent: MobileMode && "center"}}>
                <DevProject 
                    UIProject={true}
                    DisableDesc={true}
                    NameProject={'Jarcode Landing Page'}
                    Date={'February, 2022'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722680761/ui-javas_fwshjj.jpg'}
                    AltThumb={'Dutivul - Boost Your Productivity'}
                    TechUsed={['Figma']}
                />

                <DevProject 
                    LongDesignHeight={SpecialUI}
                    UIProject={true}
                    DisableDesc={true}
                    NameProject={'Jarcode Landing Page'}
                    Date={'February, 2022'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722680774/photograph_rdnnu4.jpg'}
                    AltThumb={'Dutivul - Boost Your Productivity'}
                    TechUsed={['Figma']}
                />
            </div>
        </div>
    )
}