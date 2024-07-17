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
    <div className="w-full text-palette-11 text-left border-palette-11 border-solid border-b-2 pl-5 pb-1 pt-1 pr-5">
      <div className="flex flex-row justify-between content-center items-center">
        <SectionTitle bold left>
          {props.question}
        </SectionTitle>
        <Button onClick={toggleResponse} className="min-w-8 border-transparent bg-transparent" noBorder>
          {showResponse ? '-' : '+'}
        </Button>
      </div>
      {showResponse && <Text left full> {props.response ? props.response : props.children ? props.children : '---'}</Text>}
    </div>
  );
}
