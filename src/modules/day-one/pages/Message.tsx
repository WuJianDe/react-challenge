interface MessageProps {
  type: "count" | "text";
  count?: number;
  text?: string;
}

const Message: React.FC<MessageProps> = ({ type, count = 0, text = "" }) => {
  if (type === "count") {
    const countContent =
      count >= 5 ? <span style={{ color: "red" }}>{count}</span> : count;
    return <>{countContent}</>;
  }

  if (type === "text") {
    let textContent;
    if (text.length > 10) {
      textContent = <span style={{ color: "red" }}>{text}</span>;
    } else if (text.length === 0) {
      textContent = <span style={{ color: "gray" }}>text</span>;
    } else {
      textContent = text;
    }
    return <span>{textContent}</span>;
  }

  return null; 
};

export default Message;
