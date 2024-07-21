'use client';

import React, { useState } from "react";
import SectionTitle from "../Text/SectionTitle";
import Text from "../Text/Text";
import Button from "@/app/UX/button/button";

interface QuestionProps {
  question: string;
  response?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Question(props: QuestionProps) {
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponse = () => {
    setShowResponse(!showResponse);
  };

  return (
    <div className="w-full text-palette-11 dark:text-palette-1 text-left border-palette-11 dark:border-palette-1 border-solid border-b-2 md:pl-5 pb-1 pt-1 md:pr-5" onClick={toggleResponse}>
      <div className="flex flex-row justify-between content-center items-center">
        <SectionTitle bold left>
          {props.question}
        </SectionTitle>
        <Button onClick={toggleResponse} className="min-w-8 border-transparent bg-transparent dark:text-palette-50" noBorder>
          {showResponse ? '-' : '+'}
        </Button>
      </div>
      {showResponse && <Text left full> {props.response ? props.response : props.children ? props.children : '---'}</Text>}
    </div>
  );
}
