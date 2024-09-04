import clsx from "clsx";
import type { ReactNode } from "react";

type BaseProps = {
  as?: "div" | "li";
} & React.HTMLAttributes<HTMLElement>;

type Props = BaseProps & {
  title: React.ReactNode;
  description: React.ReactNode;
  date: string;
  company: ReactNode;
  tech?: string[];
};

const TimelineCard = ({
  as,
  description,
  date,
  company,
  tech,
  title,
  className,
  ...props
}: Props) => {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        [
          "group relative z-10 items-center",
          "grid [grid-template-areas:'dot_header''._card']",
          "grid-cols-[var(--timeline-width)_1fr]",
        ],
        /* [
          "md:grid-cols-[1fr_var(--timeline-width)_1fr]",
          "gap-5 md:text-start",

          "md:odd:[grid-template-areas:'._dot_header''._._card']",
          "md:odd:self-end",

          "md:even:[grid-template-areas:'header_dot_.''card_._.']",
        ], */
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          "ml-5 text-xl font-bold [grid-area:header] group-odd:self-end",
          /*  "md:group-odd:self-start md:group-even:self-end md:group-even:justify-self-end", */
        )}
      >
        <div
          className={clsx(
            "flex items-center gap-2",
            /* "md:group-even:flex-row-reverse", */
          )}
        >
          <h3 className="text-xl font-bold group-odd:self-end">{title}</h3>
          <p className="text-sm font-normal">{date}</p>
        </div>
        <div
          className={clsx(
            "text-sm font-semibold text-text/70",
            /*  "md:group-even:text-right", */
          )}
        >
          at {company}
        </div>
      </div>
      <div className={clsx("relative z-10 p-5 text-sm [grid-area:card]")}>
        <div className="flex w-full justify-between">
          <div className="ml-0 flex w-full max-w-2xl flex-col md:ml-4">
            {description}
          </div>
        </div>
      </div>
      {/* Dot */}
      <div
        className={clsx(
          [
            "top-10 mt-1.5 aspect-square w-4 self-start justify-self-center rounded-full border-2 border-current bg-primary-100 [grid-area:dot]",
          ],
          ["md:w-5"],
        )}
      />
    </Component>
  );
};

export default TimelineCard;
