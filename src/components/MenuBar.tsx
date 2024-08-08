import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiVuejsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";

import { Tooltip } from 'react-tooltip'
import git from "../assets/github.png";

type LanguageSelectorProps = {
    changeLanguage: (language: string) => void;
    selectedLanguage :string
  };

export const MenuBar: React.FC<LanguageSelectorProps> = ({ changeLanguage,selectedLanguage  }) => {
 
    return (
            <div className="bg-[#363636] fixed left-[5%]  md:left-2/4 md:bottom-5 md:transform md:-translate-x-2/4 p-4 rounded-lg text-zinc-300    ">
                <nav>
                    <ul className="gap-3   flex flex-col md:flex-row">
                            <li onClick={() => changeLanguage('react')}
                                className={`h-9 cursor-pointer ${selectedLanguage === 'react' && 'border-b-2 border-[#00CCFF]' }`}

                                 data-tooltip-id="react"
                                 data-tooltip-content="React"
                                 data-tooltip-place="top">
                                <IconContext.Provider value={{color:'#F5B061', size:"2em" }}>
                                <FaReact />
                                <Tooltip id="react" />
                                </IconContext.Provider>
                               
                            </li>
                           
                            <li  onClick={() => changeLanguage('html')}
                        
                            className={`h-9 cursor-pointer ${selectedLanguage === 'html' && 'border-b-2 border-[#F16529]' }`}

                            data-tooltip-id="html"
                             data-tooltip-content="HTML"
                             data-tooltip-place="top">
                                <IconContext.Provider value={{color:'#F5B061', size:"2em" }}>
                                <FaHtml5 />
                                <Tooltip id="html" />
                                </IconContext.Provider>
                            </li>   
                       
                            <li   onClick={() => changeLanguage('native')}
                            className={`h-9 cursor-pointer ${selectedLanguage === 'native' && 'border-b-2 border-[#FFC107]' }`}

                            data-tooltip-id="native"
                             data-tooltip-content="Native"
                             data-tooltip-place="top">
                                <IconContext.Provider value={{color:'#F5B061', size:"2em" }}>
                                <TbBrandReactNative />
                                <Tooltip id="native" />
                                </IconContext.Provider>
                            </li>

                            <li onClick={() => changeLanguage('vue')}
                             className={`h-9 cursor-pointer ${selectedLanguage === 'vue' && 'border-b-2 border-[#ac3feb]' }`}
                          
                            data-tooltip-id="vue"
                             data-tooltip-content="Vue"
                             data-tooltip-place="top">
                                <IconContext.Provider value={{color:'#F5B061', size:"2em" }}>
                                <RiVuejsLine />
                                <Tooltip id="vue" />
                                </IconContext.Provider>
                            </li>

                            <li onClick={() => changeLanguage('angular')}
                             className={`h-9 cursor-pointer ${selectedLanguage === 'angular' && 'border-b-2 border-[#38ce8f]' }`}
                          
                            data-tooltip-id="angular"
                             data-tooltip-content="angular"
                             data-tooltip-place="top">
                                <IconContext.Provider value={{color:'#F5B061', size:"2em" }}>
                                <FaAngular />

                                <Tooltip id="angular" />
                                </IconContext.Provider>
                            </li>

                            <li className="hidden md:border"></li>


                            <li className="cursor-pointer"
                             data-tooltip-id="git"
                             data-tooltip-content="GitHub"
                             data-tooltip-place="top">
                                <a href="https://github.com/Adriano-VR" target="_blank" rel="noopener noreferrer">
                                <img src={git} alt="" className=" size-[2em]" />
                                <Tooltip id="git" />
                                </a>
                            </li>
                    </ul>
                </nav>
            </div>

    )
}