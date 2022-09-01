import React, { ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function LongCommentChecker() {
    const minSizeComment = 5
    const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
    const [comment, setComment] = useState<string>('')

    const onClickSendComment = () => {
        if (comment.length > minSizeComment) {
            setComment('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newComment = e.currentTarget.value
        if (newComment.length > minSizeComment) {
            setIsCommentReady(true)
        } else {
            setIsCommentReady(false)
        }
        setComment(newComment)
    }

    return (
        <main>
            <textarea
                placeholder={'Your comment must have more than 5 charters'}
                value={comment}
                onChange={onChangeHandler}
            />
            <div>
                <button
                    disabled={comment.length <= minSizeComment}
                    onClick={onClickSendComment}>
                    Send comment
                </button>
            </div>
        </main>
    )
}

ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));

















