export function NavButton({ url, name, isCurrent, makeCurrent }) {
  return (
    <>
        <a href={`/${url}`} className={`navbutton ${isCurrent?' current':''}`} onClick={()=> makeCurrent(name)}>
          {name}
        </a>
    </>
  );
}