import React from "react";
import { qa } from "./FaqConstants";
import FaqCard from "../../components/FaqCard/FaqCard";

function Faq() {
  return (
    <section className="py-10 bg-pink-400 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
            Explore the common questions and answers
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {qa.map((item) => {
            return <FaqCard question={item.question} answer={item.answer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
