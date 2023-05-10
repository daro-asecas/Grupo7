export function NavButton({ name, isCurrent, makeCurrent }) {
  return (
    <>
        <a href={`/${name}`} className={`navbutton ${isCurrent?' current':''}`} onClick={()=> makeCurrent(name)}>
          {name}
        </a>
    </>
  );
}