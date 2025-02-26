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

    const Skills = [{ Name: 'Sequelize', Icon: <i class="devicon-sequelize-plain"></i>},{ Name: 'MySQL', Icon: <i class="devicon-mysql-original"></i>},
        { Name: 'Python (Flask)', Icon: <i class="fa-brands fa-python"></i> },
        { Name: 'Express.Js', Icon: <i class="devicon-express-original"></i>},
        { Name: 'React.Js', Icon: <i class="devicon-react-original"></i> },
        // {Name: 'Next.Js', Icon: <i class="devicon-nextjs-plain"></i>},
        { Name: 'Node.Js', Icon: <i class="devicon-nodejs-plain-wordmark"></i> },
        { Name: 'JavaScript', Icon: <i class="fa-brands fa-js"></i> },
        { Name: 'Tailwind CSS', Icon: <i class="devicon-tailwindcss-original"></i> },
        // {Name: 'TypeScript', Icon: <i class="devicon-typescript-plain"></i>},
        //{ Name: 'Html', Icon: <i class="devicon-html5-plain"></i> },
        //{ Name: 'Css', Icon: <i class="devicon-css3-plain"></i> },
        { Name: 'Figma', Icon: <i class="devicon-figma-plain"></i> },
        { Name: 'Git', Icon: <i class="devicon-git-plain"></i> },
        { Name: 'GitHub', Icon: <i class="devicon-github-original"></i>
          },
        { Name: 'VS Code', Icon: <i class="devicon-vscode-plain"></i>}
    ]

    return (
        <div className="Skills">
            <h1 style={HeadingFontSize}>Expertise</h1>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={SkillsContainer}>
                    {Skills.map((Item, Index) =>
                        <div className="SkillsMap">
                            <p key={Index} style={{ fontSize: MobileMode ? "12px" : "14px" }}><span style={{ paddingRight: "4px" }}>{Item.Icon}</span> {Item.Name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}