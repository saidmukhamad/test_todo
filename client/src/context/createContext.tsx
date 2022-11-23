import React from "react";
import { createTracing } from "trace_events";
export const Create = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const CreateProvider = ({ children }: Props) => {
  const [create, setCreate] = React.useState<any>({
    trigger: false,
    date: "",
  });

  React.useEffect(() => {
    console.log(create, "cccccccccccccccc");
  }, [create]);

  return <Create.Provider value={{ create, setCreate }}>{children}</Create.Provider>;
};

export default CreateProvider;
