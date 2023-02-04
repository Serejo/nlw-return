import { CloseButton } from "../CloseButton";

import bugImageUrl from './../../assets/emoji.svg'
import ideaImageUrl from './../../assets/idea.svg'
import thoughtImageUrl from './../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    Bug: {
        title:"Problema",
        image:{
            source:bugImageUrl,
            alt:'Inseto'
        }
    },
    Idea:{
        title:"Ideia",
        image:{
            source:ideaImageUrl,
            alt:'Lâmpada'
        }
        
    },
    Other: {
        title:"Outro",
        image:{
            source:thoughtImageUrl,
            alt:'Balão'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false);
    
    function handleRestartFeedback(){
        setFeedbackSend(false)
        setfeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSend ? <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/> : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType}/>
                        ) : (
                         <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSend= {()=> setFeedbackSend(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2"href="https://github.com/Serejo">Serejo</a>
            </footer>
        </div>
    )
}