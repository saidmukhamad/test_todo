import React from "react";
export const Create = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const CreateProvider = ({ children }: Props) => {
  const [create, setCreate] = React.useState<any>({
    trigger: false,
    date: "",
  });

  const [watch, setWatch] = React.useState<any>({
    trigger: true,
    note: {},
    index: 0,
  });

  // React.useEffect(() => {

  // }, [create]);

  return (
    <Create.Provider value={{ create, watch, setCreate, setWatch }}>
      {children}
    </Create.Provider>
  );
};

export default CreateProvider;
