
import { useState } from "react";
import { dados }  from "../data/dados";
import { MenuBar } from "./MenuBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './transitions.css'; // Certifique-se de definir suas classes CSS de transição


const Home = () => {
    const [language, setLanguage] = useState("react");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  

    return (
            <div className="w-screen h-screen">
                <div className="flex items-center  justify-center h-full gap-5 ">
                
                <MenuBar changeLanguage={changeLanguage} selectedLanguage={language}/> 
                
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={language} // A chave deve mudar quando o idioma mudar
                        timeout={300} // Duração da animação em milissegundos
                        classNames="fade" // Nome das classes CSS de transição
                    >
                        <div className=" grid grid-cols-1 place-items-center gap-y-5  md:flex  justify-center md:gap-5 ">
                            {dados.filter((a) => a.tipo.includes(language)).map((dados) => (
                                <div key={dados.id} className="  w-11/12 items-center p-5 flex flex-col md:w-[25vw] md:h-[55vh] border rounded md:p-5 ">
                                    <img src={dados.thumb} alt="" className="size-60 mb-5" />
                                    <div className="flex flex-col justify-center md:justify-between md:h-full  text-justify gap-5">
                                        <h2>{dados.descricao}</h2>
                                        <a href={dados.url} target="_blank" className="text-center bg-[#363636] rounded p-2">Acessar</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                    
                </div>
            </div>
    )
}

export default  Home