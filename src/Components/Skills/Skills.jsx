import { useContext } from "react"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function Skills() {
    const MobileMode = useContext(MobileModeContext)

    const HeadingFontSize = {
        fontSize: "1.25rem"
    }
    const SkillsContainer = {
        display: "flex",
        flexDirections: "row",
        gap: "6px",
        marginTop: "14px",
        flexWrap: "wrap"
    }

    const Skills = ['React.js', 'Next.js', 'JavaScript', 'Typescript', 'Node.js', 'Html', 'Css', 'Figma', 'Git']

    return(
        <div className="Skills">
            <h1 style={HeadingFontSize}>Skills</h1>
            <div style={SkillsContainer}>
                    {Skills.map((Item, Index) => 
                        <div className="SkillsMap">
                            <p key={Index} style={{fontSize: MobileMode ? "12px" : "14px"}}>{Item}</p>
                        </div>
                    )}
            </div>
        </div>
    )
}