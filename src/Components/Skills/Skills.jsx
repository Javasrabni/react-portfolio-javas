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

    const Skills = [
        {Name: 'Python', Icon: <i class="fa-brands fa-python"></i>},
        {Name: 'Next.Js', Icon: <i class="devicon-nextjs-plain"></i>},
        {Name: 'JavaScript', Icon: <i class="fa-brands fa-js"></i>},
        {Name: 'TypeScript', Icon: <i class="devicon-typescript-plain"></i>},
        {Name: 'Node.Js', Icon: <i class="devicon-nodejs-plain-wordmark"></i>},
        {Name: 'Tailwind', Icon: <i class="devicon-tailwindcss-original"></i>},
        {Name: 'Html', Icon: <i class="devicon-html5-plain"></i>},
        {Name: 'Css', Icon: <i class="devicon-css3-plain"></i>},
        {Name: 'Figma', Icon: <i class="devicon-figma-plain"></i>},
        {Name: 'Git', Icon: <i class="devicon-git-plain"></i>}
    ]
    
    return(
        <div className="Skills">
            <h1 style={HeadingFontSize}>Skills</h1>
            <div style={SkillsContainer}>
                    {Skills.map((Item, Index) => 
                        <div className="SkillsMap">
                            <p key={Index} style={{fontSize: MobileMode ? "12px" : "14px"}}><span style={{paddingRight: "4px"}}>{Item.Icon}</span> {Item.Name}</p>
                        </div>
                    )}
            </div>
        </div>
    )
}