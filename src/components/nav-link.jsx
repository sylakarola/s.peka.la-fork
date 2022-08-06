function NavLink({ currentPath, children, href }) {
  const classes = [
    "py-2",
    "px-3",
    "uppercase",
    "tracking-wider",
    "text-sm",
    "font-semibold",
  ];
  if (currentPath === href.slice(1)) {
    classes.push("bg-pink-300", "text-neutral-800");
  } else {
    classes.push("text-white");
  }
  return (
    <a href={href} class={classes.join(" ")}>
      {children}
    </a>
  );
}

export default NavLink;
