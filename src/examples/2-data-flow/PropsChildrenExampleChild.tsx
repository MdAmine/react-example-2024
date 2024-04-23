function PropsChildrenExampleChild(props) {
  return (
    <div
      style={{
        color: "blue",
        fontWeight: "bold",
        margin: "5px 200px 5px 200px",
        border: "3px solid #73AD21",
      }}
    >
      {props.children}
    </div>
  );
}

export default PropsChildrenExampleChild;
