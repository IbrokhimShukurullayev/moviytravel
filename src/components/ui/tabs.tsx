"use client";
import React, { useState } from "react";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({ defaultValue, children, className }: TabsProps) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabsContextType {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType>({
  active: "",
  setActive: () => {},
});

export const TabsList = ({ children, className }: any) => {
  return <div className={className}>{children}</div>;
};

export const TabsTrigger = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { active, setActive } = React.useContext(TabsContext);
  const isActive = active === value;

  return (
    <button
      onClick={() => setActive(value)}
      className={`${className} ${
        isActive ? "bg-green-600 text-white" : "bg-white text-green-600"
      } border rounded px-4 py-2`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { active } = React.useContext(TabsContext);
  if (active !== value) return null;

  return <div className={className}>{children}</div>;
};
