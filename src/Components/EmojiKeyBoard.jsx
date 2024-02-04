import { useEmojiKeyBoard } from "../hooks/useEmojiKeyBoard";

function EmojiKeyBoard({ handleInputButtonClick }) {
    const emojiCategories = useEmojiKeyBoard();

    return (
        <div className='emoji-keyboard'>
            {Object.entries(emojiCategories).map(([category, emojis]) => (
                <div key={category}>
                    <h3>{category}</h3>
                    {emojis.map((emoji, index) => (
                        <button key={index} onClick={() => handleInputButtonClick(emoji)}>
                            {emoji}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default EmojiKeyBoard;