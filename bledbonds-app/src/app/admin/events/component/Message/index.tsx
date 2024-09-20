interface MessageProps {
  readonly sender: string;
  readonly message: string;
  readonly isMine: boolean;
}


export default function Message({ sender, message, isMine }: MessageProps) {
  return (
    <div
      className={`flex ${isMine ? 'justify-end' : 'justify-start'} my-2`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isMine
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-300 text-black rounded-bl-none'
        }`}
      >
        <div className="text-xs mb-1">{isMine ? 'Yo' : sender}</div>
        <div>{message}</div>
      </div>
    </div>
  );
}
