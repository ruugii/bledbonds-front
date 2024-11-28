interface ChatOptionsProps {
  chatId: number;
  chatName: string;
  onClick: () => void;
}

export default function ChatOptions(props: ChatOptionsProps) {
  return (
    <div className="p-6 bg-palette-11 dark:bg-palette-900 rounded-lg border border-palette-9 dark:border-palette-800 shadow-md flex flex-col content-center justify-center items-center" onClick={props.onClick}>
      {props.chatName}
    </div>
  );
}