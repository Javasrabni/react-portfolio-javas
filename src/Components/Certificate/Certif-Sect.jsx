import DevProject from "../Project/Dev-Project"
import { DesktopMode } from "../../App"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"
import { useContext, useState } from "react"

export default function CertifeSect() {
    const MobileMode = useContext(MobileModeContext)
    const Certife = {
        width: "100%",
        marginTop: "20px",
        height: "100%"
    }

    const DesktopModes = DesktopMode.matches

    const [onExpand, setOnExpand] = useState(false)

    return (
        <>
            <div style={Certife}>
                <h1 style={{ fontSize: MobileMode && "30px", textAlign: "center", }}>Certificates And Achievements</h1>
                <p style={{fontSize: MobileMode && "14px", textAlign: "center", padding: MobileMode ? "0px 14px" : "0px 28px"}}>I have earned various certificates and several achievements, which demonstrate my dedication, and innovative spirit.</p>
            </div>

            <div style={{position: "relative", flexShrink:'0', display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: DesktopModes ? "" : "center", flexGrow: '0',}}>
                {MobileMode ? (
                    <>
                        <DevProject 
                    Certife={true}
                    Date={'July, 2024'}
                    NameCompany={'Institut Teknologi Bandung (ITB)'}
                    NameProject={'Accounting Course'}
                    LinkCredential={'https://icecenter.itb.ac.id/tutor-certificate/?cert_hash=c7c09077f8626b5f'}
                    ProfileCompany={'https://media.licdn.com/dms/image/C560BAQGJoYkUiQpUKA/company-logo_200_200/0/1630672186443/itb_logo?e=1730332800&v=beta&t=JcmGp4pX3XV8vQ5k1Um3dW_M1CjRcxS3WxVtpbYzo14'}

                    Desc={'Successfully completed the accounting class organized by Institut Teknologi Bandung (ITB).'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722410697/Acounting_jvxwom.jpg'}
                    AltThumb={'Certife'}
                />

                <DevProject 
                    Certife={true}
                    Date={'June, 2024'}
                    NameProject={'CIP Program Cyber Security'}
                    NameCompany={'OPSWAT Academy'}
                    LinkCredential={'https://learn.opswatacademy.com/certificate/w3f5zbg7dw'}
                    ProfileCompany={'https://media.licdn.com/dms/image/D4E0BAQFb_JWJK4Sazg/company-logo_200_200/0/1686761865930/opswat_logo?e=1727913600&v=beta&t=rBl4eUJ8tYg2yhiXvrv_FRScVCJmsijHDqk2qCwGtDg'}

                    Desc={'Completed the standarts and requirements and is recognized as a graduate of the introduction to CIP Program.'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722408381/WhatsApp_Image_2024-06-22_at_10.02.16_hwdsw3.jpg'}
                    AltThumb={'Certife'}
                />

                <DevProject 
                            Certife={true}
                            Date={'July, 2024'}
                            NameCompany={'Ilmuone'}
                            NameProject={'Coding Class Web Development'}
                            ProfileCompany={'https://media.licdn.com/dms/image/D560BAQE6-qR0cj5RUg/company-logo_200_200/0/1715318912526/ilmuone_logo?e=1730332800&v=beta&t=M5OWqXlnXRRrx9O2rOUBsZkzFz7YVZIIU-5KMhQxU8w'}

                            Desc={'Successfully completed the Coding Class Web Development organized by Ilmuone.'}
                            Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411134/Ilmuone_ibg4tv.jpg'}
                            AltThumb={'Certife'}
                            DisableCredential={true}

                        />

                {!onExpand && (
                     <div style={{position: "absolute", zIndex: "11",bottom: "-24px", left: "-8px", width: "100%",  }}>
                     <div className="Expand-certif"/>
                     <div style={{width: "105%", height: "6rem", backgroundColor: "var(--background)", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                         <div onClick={()=> setOnExpand(true)} style={{backgroundColor: "transparent", padding: "4px 8px", fontSize: "10px", borderRadius: "4px", cursor: "pointer", outline: "1px solid var(--border)"}}>
                             <div style={{display: "flex", gap: "8px", paddingBottom: "2px"}}>
                                 <p style={{fontWeight: "600", color: "var(--foreground)"}}>Expand</p>
                                 <i style={{color: "var(--foreground)"}} class="fa-solid fa-sort-down"></i>
                             </div>
                         </div>
                     </div>
 
                 </div>
                )}

                {onExpand && (
                    <>
                        <DevProject 
                            Certife={true}
                            Date={'March, 2024'}
                            NameCompany={'Skilvul'}
                            NameProject={'National Digital League - Web Development'}
                            ProfileCompany={'https://media.licdn.com/dms/image/C510BAQFlVe4cQaiGAg/company-logo_200_200/0/1630587775486/skilvul_logo?e=1727913600&v=beta&t=xzmijwya2Sf5hofb3URgSFFcSjqGxlFIdQ-zpxLS0UI'}

                            Desc={'National competitions and competing to generate innovative ideas to solve existing problems.'}
                            Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722410213/Skilvul_gjkqys.jpg'}
                            AltThumb={'Certife'}
                            DisableCredential={true}
                        />

                        

                        <DevProject 
                            Certife={true}
                            Date={'July, 2024'}
                            NameCompany={'Manoosia'}
                            NameProject={'Computational Thinking'}
                            ProfileCompany={'https://media.licdn.com/dms/image/D560BAQFIBZLsmXT_mA/company-logo_200_200/0/1680595374708/manoosia_logo?e=1730332800&v=beta&t=FFXW9z7CWS3TM2Jsfe_hnOdUAqF5sAgeWcibP-z1e5w'}

                            Desc={'Successfully completed the Computational Thinking organized by Manoosia.'}
                            Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411365/Manoosia_abbj4v.jpg'}
                            AltThumb={'Certife'}
                            DisableCredential={true}

                        />

                        <DevProject 
                            Certife={true}
                            Date={'March, 2024'}
                            NameCompany={'Edspert.id'}
                            NameProject={'Front-End Developer Mini Bootcamp'}
                            ProfileCompany={'https://media.licdn.com/dms/image/C4D0BAQGs4zJhV638xg/company-logo_200_200/0/1646820166209?e=1730332800&v=beta&t=kG73NsEsWnfS5TsVW2nyqyiFzMnBuFkWdKBH8CUCY4o'}

                            Desc={'Successfully completed the Front-End Developer Mini Bootcamp organized by Edspert.id.'}
                            Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411615/Edspert_bcjkn9.jpg'}
                            AltThumb={'Certife'}
                            DisableCredential={true}

                        />
                    </>
                )}
                    </>


                ) : (



                    <>
                        <DevProject 
                    Certife={true}
                    Date={'July, 2024'}
                    NameCompany={'Institut Teknologi Bandung (ITB)'}
                    NameProject={'Accounting Course'}
                    LinkCredential={'https://icecenter.itb.ac.id/tutor-certificate/?cert_hash=c7c09077f8626b5f'}
                    ProfileCompany={'https://media.licdn.com/dms/image/C560BAQGJoYkUiQpUKA/company-logo_200_200/0/1630672186443/itb_logo?e=1730332800&v=beta&t=JcmGp4pX3XV8vQ5k1Um3dW_M1CjRcxS3WxVtpbYzo14'}

                    Desc={'Successfully completed the accounting class organized by Institut Teknologi Bandung (ITB).'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722410697/Acounting_jvxwom.jpg'}
                    AltThumb={'Certife'}
                />

                <DevProject 
                    Certife={true}
                    Date={'June, 2024'}
                    NameProject={'CIP Program Cyber Security'}
                    NameCompany={'OPSWAT Academy'}
                    LinkCredential={'https://learn.opswatacademy.com/certificate/w3f5zbg7dw'}
                    ProfileCompany={'https://media.licdn.com/dms/image/D4E0BAQFb_JWJK4Sazg/company-logo_200_200/0/1686761865930/opswat_logo?e=1727913600&v=beta&t=rBl4eUJ8tYg2yhiXvrv_FRScVCJmsijHDqk2qCwGtDg'}

                    Desc={'Completed the standarts and requirements and is recognized as a graduate of the introduction to CIP Program.'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722408381/WhatsApp_Image_2024-06-22_at_10.02.16_hwdsw3.jpg'}
                    AltThumb={'Certife'}
                />

                <DevProject 
                    Certife={true}
                    Date={'March, 2024'}
                    NameCompany={'Skilvul'}
                    NameProject={'National Digital League - Web Development'}
                    ProfileCompany={'https://media.licdn.com/dms/image/C510BAQFlVe4cQaiGAg/company-logo_200_200/0/1630587775486/skilvul_logo?e=1727913600&v=beta&t=xzmijwya2Sf5hofb3URgSFFcSjqGxlFIdQ-zpxLS0UI'}

                    Desc={'National competitions and competing to generate innovative ideas to solve existing problems.'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722410213/Skilvul_gjkqys.jpg'}
                    AltThumb={'Certife'}
                    DisableCredential={true}

                />

                <DevProject 
                    Certife={true}
                    Date={'July, 2024'}
                    NameCompany={'Ilmuone'}
                    NameProject={'Coding Class Web Development'}
                    ProfileCompany={'https://media.licdn.com/dms/image/D560BAQE6-qR0cj5RUg/company-logo_200_200/0/1715318912526/ilmuone_logo?e=1730332800&v=beta&t=M5OWqXlnXRRrx9O2rOUBsZkzFz7YVZIIU-5KMhQxU8w'}

                    Desc={'Successfully completed the Coding Class Web Development organized by Ilmuone.'}
                    Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411134/Ilmuone_ibg4tv.jpg'}
                    AltThumb={'Certife'}
                    DisableCredential={true}

                />

                {!onExpand && (
                    <div style={{position: "absolute", zIndex: "11",bottom: "-4px", left: "-8px", width: "100%",  }}>
                    <div className="Expand-certif"/>
                    <div style={{width: "105%", height: "6rem", backgroundColor: "var(--background)", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                        <div onClick={()=> setOnExpand(true)} style={{backgroundColor: "transparent", padding: "4px 8px", fontSize: "14px", borderRadius: "4px", cursor: "pointer", outline: "1px solid var(--border)"}}>
                            <div style={{display: "flex", gap: "8px", paddingBottom: "2px"}}>
                                <p style={{fontWeight: "600", color: "var(--foreground)"}}>Expand</p>
                                <i style={{color: "var(--foreground)"}} class="fa-solid fa-sort-down"></i>
                            </div>
                        </div>
                    </div>

                </div>
                )}

                {onExpand && (
                    <>
                    <DevProject 
                        Certife={true}
                        Date={'July, 2024'}
                        NameCompany={'Manoosia'}
                        NameProject={'Computational Thinking'}
                        ProfileCompany={'https://media.licdn.com/dms/image/D560BAQFIBZLsmXT_mA/company-logo_200_200/0/1680595374708/manoosia_logo?e=1730332800&v=beta&t=FFXW9z7CWS3TM2Jsfe_hnOdUAqF5sAgeWcibP-z1e5w'}

                        Desc={'Successfully completed the Computational Thinking organized by Manoosia.'}
                        Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411365/Manoosia_abbj4v.jpg'}
                        AltThumb={'Certife'}
                        DisableCredential={true}

                    />

                    <DevProject 
                        Certife={true}
                        Date={'March, 2024'}
                        NameCompany={'Edspert.id'}
                        NameProject={'Front-End Developer Mini Bootcamp'}
                        ProfileCompany={'https://media.licdn.com/dms/image/C4D0BAQGs4zJhV638xg/company-logo_200_200/0/1646820166209?e=1730332800&v=beta&t=kG73NsEsWnfS5TsVW2nyqyiFzMnBuFkWdKBH8CUCY4o'}

                        Desc={'Successfully completed the Front-End Developer Mini Bootcamp organized by Edspert.id.'}
                        Thumbnail={'https://res.cloudinary.com/dwf753l9w/image/upload/v1722411615/Edspert_bcjkn9.jpg'}
                        AltThumb={'Certife'}
                        DisableCredential={true}

                    />

                    </>
                )}
                    </>
                )}
            </div>
        </>
    )
}