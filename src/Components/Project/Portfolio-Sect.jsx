import { useEffect, useState, useContext} from "react"
import UIProject from "./UI-Project"
import DevProject from "./Dev-Project"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function PortfolioSect() {
    const MobileMode = useContext(MobileModeContext)
    const TabletQuerry = window.matchMedia(' (max-width: 900px) ')
    const TabletMode = TabletQuerry.matches
    
    const [onActiveWeb, setActiveWeb] = useState(true)
    const [onActiveUI, setActiveUI] = useState(false)

    function HandleActiveWeb() {
        setActiveWeb(true)
        setActiveUI(false)
    }
    function HandleActiveUI() {
        setActiveUI(true)
        setActiveWeb(false)
    }

    const onActiveWebStyle = {
        color: onActiveWeb ? "var(--foreground)" : ""
    }
    const onActiveUIStyle = {
        color: onActiveUI ? "var(--foreground)" : ""
    }

    const Desktop = window.matchMedia(' (min-width: 1000px)')
    const DesktopMode = Desktop.matches

    const [NewestProject,] = useState({
        display: MobileMode ? "none" : TabletMode ? "none" :"static", 
        width: "200px" ,
        marginTop: "10px",
        position: "absolute" ,
        top: "90px",
        left: "0px"
    })
    const [NewestProjectRight,] = useState({
        display: DesktopMode ? "static" : "none",
        width: "200px" ,
        marginTop: "10px",
        position: "absolute" ,
        top: "-78px",
        right: "0px"
    })

    const Portfolio = {
        width: "100%",
        marginTop: "20px"
    }

    const [ProjectSection, setProjectSections] = useState({
        position: DesktopMode ? "relative" : "",
        top: DesktopMode ? "70px" : "",
        left: DesktopMode ? "-290px" : "",
        display: "flex", 
        flexDirection: DesktopMode ? "column" : "row", 
        gap: DesktopMode ? "8px" : "",
        width: "100%", 
        justifyContent: DesktopMode ? "" : "space-around",
        marginTop: DesktopMode? "" : "40px", 
        userSelect: "none",

    })

    // Right panel
    const [ProjectSectionRight, setProjectSectionsRight] = useState({
        position: DesktopMode ? "relative" : "",
        top: DesktopMode ? "70px" : "",
        right: DesktopMode ? "-290px" : "",
        display: MobileMode ? "none" : TabletMode ? "none" : "flex", 
        flexDirection: DesktopMode ? "column" : "row", 
        gap: DesktopMode? "8px" : "",
        width: "100%", 
        justifyContent: DesktopMode ? "" : "space-around",
        marginTop: DesktopMode? "" : "40px", 
        userSelect: "none",
    })
    
    useEffect(()=> {
        if(Desktop.matches) {
            setProjectSections(Prev => ({
                ...Prev,
                width: "200px",
                height: "fit-content",
                padding: "12px",
                backgroundColor: "var(--border)",
                fontSize: "12px",
                fontWeight: "600",
                borderRadius: "8px",
                border: "1px solid var(--border)"
            }))
        }
    },[Desktop.matches])



    const [ActivedNewest, setActivedNewest] = useState(false)
    function HandleNewestClick() {
        setActivedNewest(true)
        setTimeout(()=> {
            setActivedNewest(false)
        }, 500)
        setTimeout(()=> {
            setActivedNewest(true)
        }, 700)
        setTimeout(()=> {
            setActivedNewest(false)
        }, 800)
        setTimeout(()=> {
            setActivedNewest(true)
        }, 900)
        setTimeout(()=> {
            setActivedNewest(false)
        }, 1500)
    }

    const [onContact, setOnContact] = useState(false)
    function HandleClickContact() {
        setOnContact((prev)=> !prev)
    }
    const [mouseOverLinkSocial, setMouseOverLinkSocial] = useState(false)
    function OnEnterLinkS(index) {
        setMouseOverLinkSocial(index)
    }
    function onLeaveLinkS() {
        setMouseOverLinkSocial(null)
    }

    function LinkDirectClick(index) {
        setTimeout(()=> {
            window.open(index, '_blank')
        }, 1000)
    }
// 

    return (
        // className="Portfolio"
        <div style={Portfolio} >
            <div>
                <h1 style={{textAlign: "center", fontSize: "30px"}}>My Projects</h1>
                <p style={{fontSize: MobileMode ? "14px" : "16px", textAlign: "center", padding: MobileMode ? "0px 14px" : "0px 28px"}}>Various projects that I have successfully worked on. ranging from web apps and simple websites.</p>
            </div>

            <div style={ProjectSection}>
                <div onClick={HandleActiveWeb} style={{cursor: "pointer", display: "flex", gap: '8px', alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{display: 'flex', alignItems: "center", gap: '8px'}}>
                        <p style={{...onActiveWebStyle, fontSize: MobileMode && "14px"}}>Web Project</p>
                        {onActiveWeb && (
                            <i style={{fontSize: MobileMode && "12px", marginTop: MobileMode && "2px"}} class="fa-solid fa-caret-left"></i>
                        )}
                    </div>
                    {!MobileMode && (
                        <p>(5)</p>
                    )}
                </div>
                <div onClick={HandleActiveUI} style={{cursor: "pointer", display: "flex", gap: '8px', alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{display: 'flex', alignItems: "center", gap: '8px'}}>
                        {MobileMode ? (
                            <>
                                {onActiveUI && (
                                <i style={{transform: "rotate(-180deg)", fontSize: MobileMode && "12px", marginTop: MobileMode && "0px"}} class="fa-solid fa-caret-left"></i>
                                )}
                                <p style={{...onActiveUIStyle, fontSize: MobileMode && "14px"}}>UI/UX Project</p>
                            </>
                        ) : (
                            <>
                                <p style={{...onActiveUIStyle, fontSize: MobileMode && "14px"}}>UI/UX Project</p>
                                {onActiveUI && (
                                    <i style={{fontSize: MobileMode && "12px", marginTop: MobileMode && "0px"}} class="fa-solid fa-caret-left"></i>
                                )}
                            </>
                        )}
                    </div>
                    {!MobileMode && (
                        <p>(2)</p>
                    )}
                </div>

                {/* Side newest */}
                <div style={NewestProject}>
                <h1 style={{textAlign: DesktopMode ? "" : "center", fontSize: DesktopMode ? "14px" : "", marginBottom: DesktopMode ? "4px" : ""}}>My Newest Project</h1>
                <p style={{textAlign: DesktopMode ? "" : "center", fontSize: DesktopMode ? "12px" : "", fontWeight: "400"}}>Various projects that I have successfully done.</p>

                <div style={{marginTop: "20px", width: "100%", cursor: "pointer"}} onClick={HandleNewestClick}>
                    <DevProject 
                        HideThumbnail={true}
                        NewWidth={{width: "200px"}}
                        NewHeight={{height: "150px"}}
                        NewFontSize={{fontSize: "10px"}}

                        NameProject={'Labeltic'}
                        Date={'4 August 2024 - 17 Augus 2024'}
                        Desc={'Helping to count a large number of lists quickly, labeltic has a replace text feature, which helps make it easier to edit text that has a large number of words.'}
                        Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1724169627/Labeltic_demo_vid_ilyeh2.mp4'}
                        AltThumb={'Labeltic'}
                    />
                </div>
                </div>

                
            </div>

            <div style={ProjectSectionRight}>
                {/* Side newest */}
                <div style={NewestProjectRight}>
                <h1 style={{textAlign: DesktopMode ? "" : "center", fontSize: DesktopMode ? "14px" : "", marginBottom: DesktopMode ? "4px" : ""}}>Open for commission</h1>
                <p style={{textAlign: DesktopMode ? "" : "center", fontSize: DesktopMode ? "12px" : "", fontWeight: "400"}}>I am open for Website and UI Design project commission.</p>

                <div style={{marginTop: "20px", width: "100%",}} >
                    <div style={{display: "flex", flexDirection: "row", gap: "14px", flexShrink: "0", alignItems: "center"}}>
                        <i style={{backgroundColor: "transparent"}} class="fa-brands fa-wordpress" title="Wordpress"></i>
                        <i class="fa-brands fa-html5" title="HTML"></i>
                        <i class="fa-brands fa-css3-alt" title="CSS"></i>
                        <i class="fa-brands fa-js" title="JavaScript"></i>
                        <i class="fa-brands fa-react" title="React.Js"></i>
                        <div style={{borderLeft: "1px solid var(--border)", paddingLeft: "14px"}}>
                            <i class="fa-brands fa-figma" title="Figma"></i>
                        </div>
                    </div>
                    <div style={{marginTop: "14px", cursor: "pointer", width: "fit-content"}} onClick={HandleClickContact}>
                        <div style={{fontSize: "12px", color: "var(--muted-foreground)", textDecoration: "underline"}}>Contact me</div>
                    </div>
                </div>

                {onContact && (
                    <div style={{marginTop: "18px", outline: "1px solid var(--border)", padding: "12px", width: "100%", borderRadius: "8px"}}>
                        <div>
                            <p style={{fontWeight: '600', fontSize: "12px", color: "var(--foreground)"}}>You can contact me on:</p>
                        </div>

                        <div style={{marginTop: "8px",display: "flex", flexDirection: "row", gap: "8px", fontSize: "11px", cursor: "pointer "}}>
                            <p onClick={()=> LinkDirectClick('https://web.telegram.org/k/#@PotKathrow')} onMouseOver={()=> OnEnterLinkS('Telegram')} onMouseLeave={onLeaveLinkS} style={{color: mouseOverLinkSocial === 'Telegram' ? 'var(--foreground)' : ""}}>Telegram</p>
                            <p onClick={()=> LinkDirectClick('https://www.linkedin.com/in/javasrabni/')} onMouseOver={()=> OnEnterLinkS('LinkedIn')} onMouseLeave={onLeaveLinkS} style={{color: mouseOverLinkSocial === 'LinkedIn' ? 'var(--foreground)' : ""}}>LinkedIn</p>
                            <p onClick={()=> LinkDirectClick('https://mail.google.com/mail/?view=cm&fs=1&to=jarcode.devp@gmail.com')} onMouseOver={()=> OnEnterLinkS('Email')} onMouseLeave={onLeaveLinkS} style={{color: mouseOverLinkSocial === 'Email' ? 'var(--foreground)' : ""}}>Email</p>
                        </div>
                    </div>
                )}
                </div>

            </div>

            

            <div style={{marginTop: '40px'}}>
                {onActiveWeb ? (
                    <div style={{flexShrink:'0', display: "flex", flexWrap: "wrap", gap: "12px", marginTop: DesktopMode ? "-60px" : "", justifyContent: MobileMode && "center"}}>
                            <DevProject 
                                // ActivedNewest={ActivedNewest}
                                NameProject={'JarJournal - Power of productivity and community. (Dynamic WebApp)'}
                                Date={'Project Timeline: 11 October 2024 - Present'}
                                Desc={`JarJournal adalah platform yang menggabungkan produktivitas dan komunitas, dirancang untuk membantu kamu memaksimalkan potensi diri.

Butuh teman bicara tapi bingung harus ke mana.. JarJournal punya solusinya Dengan fitur yang terintegrasi dengan AI Chatbot, kamu bisa ngobrol kapan saja, baik untuk curhat, belajar, atau berdiskusi tentang ide-ide baru. Chatbot ini dirancang untuk memahami dan mendukungmu, seperti seorang teman yang selalu ada. engga cuma ngobrol, kamu juga bisa dapet insight dan bantuan yang bikin aktivitasmu lebih produktif!

Selain itu, JarJournal memudahkan kamu mencatat tujuan, mengatur waktu, dan berbagi inspirasi di satu tempat. ruang untuk menulis cerita pribadi, merencanakan tugas, dan berkolaborasi dengan komunitas yang mendukung. 🌟✨

`}
                                Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1734760383/lv_0_20241221125116_rs38tk.mp4'}
                                AltThumb={'JarJournal'}
                                TechUsed={['React.Js','Node.Js','MySQL', 'Express.Js', 'Sequelize', 'Redis', 'Tailwind CSS']}
                            />
                            <DevProject 
                                ActivedNewest={ActivedNewest}
                                NameProject={'Labeltic'}
                                Date={'4 August 2024 - 17 August 2024, 13 Days'}
                                Desc={'Helping to count a large number of lists quickly, labeltic has a replace text feature, which helps make it easier to edit text that has a large number of words.'}
                                Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1724169627/Labeltic_demo_vid_ilyeh2.mp4'}
                                AltThumb={'Labeltic.xyz'}
                                TechUsed={['React.Js', 'JavaScript', 'CRA', 'Css']}
                            />
                            <DevProject 
                                // ActivedNewest={ActivedNewest}
                                NameProject={'Cookit.app'}
                                Date={'June 2024 - August 2024, 2 Month'}
                                Desc={'Specialized for anyone who has a passion for cooking, this app offers a variety of features that make it easy for you to find recipes and how to make them, full of interesting recipes!'}
                                Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1722147200/Untitled_design_1_exgeb7.mp4'}
                                AltThumb={'Cookit.app'}
                                TechUsed={['React.Js', 'JavaScript', 'CRA', 'Css']}
                            />
                            <DevProject 
                                NameProject={'Redavel - Reading Resource'}
                                Date={'Feb 2024 - Apr 2024, 2 Month'}
                                Desc={`Redavel has a specific goal to help contribute in solving problems related to the lack of interest in reading in the digital era, as well as expected to help increase insight and knowledge and develop interest in reading in users.`}
                                Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1722147341/redavel-new-motion_m30ppo.mp4'}
                                AltThumb={'Redavel - Reading Resource'}
                                TechUsed={['JavaScript', 'Css', 'Html', 'Figma']}

                            />
                            <DevProject 
                                NameProject={'Dutivul - Boost Your Productivity'}
                                Date={'Nov 2024 - Mar 2024, 4 Month'}
                                Desc={'A web app that functions to help increase productivity with the help of tools available in the web app (Dutivul) with an attractive website appearance and easy user experience.'}
                                Thumbnail={'https://res.cloudinary.com/dwf753l9w/video/upload/v1722147314/dutivul-motion-2_lyyfkt.mp4'}
                                AltThumb={'Dutivul - Boost Your Productivity'}
                                TechUsed={['JavaScript', 'Css', 'Html', 'Figma']}
                            />
                            
                    </div>
                ) : (
                    <>
                        <UIProject />
                    </>
                )}
            </div>
            
        </div>
    )
}
