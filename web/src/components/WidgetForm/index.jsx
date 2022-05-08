import { useState } from "react";

import bugImage from "../../assets/bug.png";
import ideaImage from "../../assets/idea.png";
import thoughtImage from "../../assets/thought.png";
import { FeedbackContentStep } from "../Step/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Step/FeedbackSucceessStep";
import { FeedbackTypeStep } from "../Step/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Idéia",
    image: {
      source: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Problema",
    image: {
      source: thoughtImage,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  function handleRestartFeedback() {
    console.log("chegou aqui");
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center  shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-sx text-neutral-400">
        Feito com ❤️ pelo{" "}
        <a href="#" className="underline underline-offset-2">
          {" "}
          Elian
        </a>
      </footer>
    </div>
  );
}
