import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{props.title}</h1>
    </>
  );
};
