import Resume from '../../Data/Resume.json'
import Education from './Education'
import { MobileModeContext } from '../../MediaQuerry/MobileMode'
import { useContext } from 'react'


export default function Profile() {
    const MobileMode = useContext(MobileModeContext)

    const Title = {
        display: "flex", flexDirection: "row", justifyContent: "space-between"
    }
    const About = {
        display: "flex", flexDirection: "column"
    }
    const HeadingFontSize = {
        fontSize: "1.25rem"
    }
    const HightLight = {
        textDecoration: "underline", color: 'var(--foreground)', fontWeight: "500"
    }

    return (
        <div className='Profile'>
            {/* Title */}
            <div style={Title}>
                <div>
                    <h1 className={MobileMode ? 'TitleMobile' : "Nama"} style={{marginBottom: "8px"}}>
                        {MobileMode ? (
                            Resume.map(Item => Item.NamaSingkat + "🌟")
                        ) : (
                            Resume.map(Item => Item.Nama.slice(0 , 16) + "🌟")
                        )}
                        </h1>
                    <p className={MobileMode ? 'RoleMobile' : "Role"}>{Resume.map(Item => Item.Role)} <i class="fa-solid fa-code" style={{fontSize: MobileMode ? "10px" : '12px'}}></i></p>
                </div>
                <div style={{width: "110px", height: "110px", flexShrink: "0", flexGrow: "0", backgroundColor: "var(--border)", borderRadius: "100px", display: "grid", placeItems: "center", objectFit: "cover"}}>
                    <img src='https://res.cloudinary.com/dwf753l9w/image/upload/v1734633330/IMG-20241020-WA0051_1__1_egjcnu.jpg' alt={Resume.map(Item => Item.Nama.split(' ')[0])} style={{borderRadius: "100px", width: "110px", height: "110px", objectFit: "cover"}} onContextMenu={(e)=> e.preventDefault()} draggable="false" />
                </div>
            </div>

            {/* About */}
            <div style={About}>
                <h1 style={HeadingFontSize}>About</h1>
                <p style={{fontSize: MobileMode ? "12px" : "14px", lineHeight: MobileMode ? "1rem" : "1.25rem"}}> As a Fullstack Web Developer, I combine technical expertise and marketing strategy to create digital products that not only work well, but also bring real impact to users and businesses. Having experience in building fullstack applications using React and Express Js, I focus on interactive interfaces, dynamic systems, and efficient API integration with clean code principles and scalable architecture.
                <br /><br /> 
I have additional capabilities in desktop application development using Python Tkinter as an added value of cross-platform flexibility. I always prioritize thoroughness, quality of the final product, while keeping up to date with technology and digital marketing trends to ensure the solutions I develop are relevant and impactful.
                </p>
            </div>

            {/* Education */}
 <div style={{display: "flex", flexDirection: "column", gap: "8px", cursor: "pointer"}}>
                <h1 style={{...HeadingFontSize, lineHeight: "1.25rem"}}>Education</h1>

                <Education 
                    SchoolLogo={'https://res.cloudinary.com/dwf753l9w/image/upload/v1748456851/pngwing.com_1_qyd99g.png'}
                    NameSchool={'Universitas Sultan Ageng Tirtayasa'}
                    DetailSchool={''}
                    YearSchool={'2025 - *'}
                    DirectLinkSchool={'https://untirta.ac.id'}
                />
            </div>

                <Education 
                    SchoolLogo={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722078352/man_1_uia6dw.jpg'}
                    NameSchool={'MAN 1 Kota Tangerang'}
                    DetailSchool={'Social Science'}
                    YearSchool={'2022 - 2025'}
                    DirectLinkSchool={''}
                />
         

        </div>
    )
}
