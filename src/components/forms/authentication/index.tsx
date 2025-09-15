"use client";
import { useState } from "react";
import Auth from "./auth";
import { useFetch } from "@/lib/hooks/useFetch";

interface PropsType {}

const Authentication: React.FC<PropsType> = ({}) => {
  const { data, error, fulfilled, pending, runFetch } = useFetch();
  const onSubmit = async (e: any) => {
    runFetch("https://randomuser.me/api/?results=1&nat=us");
  };

  return <>{<Auth onSubmit={onSubmit} isLoading={pending} />}</>;
};
export default Authentication;
