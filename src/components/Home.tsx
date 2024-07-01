
import { useState } from "react";
import { dados }  from "../data/dados";
import { MenuBar } from "./MenuBar";


const Home = () => {
    const [language, setLanguage] = useState("react");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  

    return (
        <div className="w-screen h-screen">
            <div className="flex items-center justify-center h-full gap-5 ">
            
             <MenuBar changeLanguage={changeLanguage} selectedLanguage={language}/> 

                {dados.filter((a) => a.tipo.includes(language)).map((dados) => (
                     
                      
                        <div key={dados.id} className="flex flex-col w-3/12 h-3/5 border rounded p-5 items-center">
                        
                            <img src={dados.thumb} alt="" className="size-60 mb-5"/>
                                <div className=" h-full text-justify w-11/12 flex flex-col justify-between">
                                <h2>{dados.descricao}</h2>

                               
                                    <a href={dados.url} target="_blank" className="text-center bg-[#363636] rounded p-2">Acessar</a>
                              
                                </div>
                           
                        </div>

                ))}
            </div>
        </div>
    )
}

export default  Home