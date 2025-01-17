import React from "react";

interface SpaceProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Space: React.FC<SpaceProps> = ({ title, description }) => {
  return (
    <div className="space-y-4 mt-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <h2>{description}</h2>
    </div>
  );
};

export default Space;
