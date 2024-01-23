"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import questions from "../../data/faq";

const Questions = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Frequently asked questions
      </h1>
      <div className="text-left mt-20">
        <Accordion variant="splitted">
          {questions.map((question, i) => (
            <AccordionItem
              key={i}
              aria-label={`${i}`}
              title={question.question}
            >
              {question.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
