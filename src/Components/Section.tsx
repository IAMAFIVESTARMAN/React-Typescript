import { ReactElement, ReactNode } from "react";

// import { FC } from "react";

type sectionPropos = { title?: string; children: ReactNode };

const Section = ({ children, title = "vd" }: sectionPropos): ReactElement => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
