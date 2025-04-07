interface MessageProps {
  type: string;
  count?: number;
  text?: string;
}
const Message: React.FC<MessageProps> = ({ type, count = 0, text = "" }) => {
  if (type === "count") {
    return (
      <>{count >= 5 ? <span style={{ color: "red" }}>{count}</span> : count}</>
    );
  } else if (type === "text") {
    return (
      <span>
        {text.length > 10 ? (
          <span style={{ color: "red" }}>{text}</span>
        ) : text.length === 0 ? (
          <span style={{ color: "gray" }}>Enter text</span>
        ) : (
          text
        )}
      </span>
    );
  }
};
export default Message;
