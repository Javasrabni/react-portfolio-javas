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
                    <img src='https://res.cloudinary.com/dwf753l9w/image/upload/v1734633268/IMG-20241020-WA0051_1_wfeaip.jpg' alt={Resume.map(Item => Item.Nama.split(' ')[0])} style={{borderRadius: "100px", width: "110px", height: "110px", objectFit: "cover"}} onContextMenu={(e)=> e.preventDefault()} draggable="false" />
                </div>
            </div>

            {/* About */}
            <div style={About}>
                <h1 style={HeadingFontSize}>About</h1>
                <p style={{fontSize: MobileMode ? "12px" : "14px", lineHeight: MobileMode ? "1rem" : "1.25rem"}}>Student at Man 1 Kota Tangerang with a keen interest in programming. I have sufficient <span style={HightLight}>experience in Web/WebApp production</span> with MERN Stack and focus on functional and user experience.
                <br /> <br />
                And I have an ability to convert visual design (UI/UX) into functional code and optimize website display to run smoothly and responsively across various devices and browsers.</p>
            </div>

            {/* Education */}
            <div style={{display: "flex", flexDirection: "column", gap: "14px", cursor: "pointer"}}>
                <h1 style={{...HeadingFontSize, lineHeight: "1.75rem"}}>Education</h1>
                <Education 
                    SchoolLogo={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722078352/man_1_uia6dw.jpg'}
                    NameSchool={'Man 1 Kota Tangerang'}
                    DetailSchool={'Social Science (IPS)'}
                    YearSchool={'2022 - 2025'}
                    DirectLinkSchool={'https://www.man-1kotatangerang.com'}
                />
            </div>

        </div>
    )
}
