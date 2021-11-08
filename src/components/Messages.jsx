//messages list component
const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={i}>{message}</div>
      ))}
    </div>
  );
};

export default Messages;
