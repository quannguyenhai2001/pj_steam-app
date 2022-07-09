import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteComment, fetchAsyncEditComment } from 'store/slices/gameSlice';
import "./CommentList.scss"

const CommentList = (props) => {
  const commentToID = useSelector(state => state.games.commentEachGame)
  const user = useSelector(state => state.games.userLogin)
  const [conditionIcon, SetConditionIcon] = useState(false)
  const [conditionInput, SetConditionInput] = useState(false)
  const [valueEdit, setValueEdit] = useState({
    content: ""
  })
  const [alo, setAlo] = useState("")
  const dispatch = useDispatch()
  const clickIconHandle = () => {
    SetConditionIcon(!conditionIcon)
  }
  const clickEditHandle = (content, index) => {
    SetConditionInput(!conditionInput)
    setValueEdit({ ...valueEdit, content: content })
    setAlo(index)


  }
  const deleteCommentHandle = (e) => {
    let index = commentToID.indexOf(e)
    dispatch(DeleteComment(index))
  }
  const submitCommemtHandle = (e) => {
    e.preventDefault()
  }
  const click1 = (e) => {
    dispatch(fetchAsyncEditComment({
      idEvaluate: e,
      valueEditComment: valueEdit
    }))
    SetConditionInput(!conditionInput)
  }
  const onChangeComment = (e) => {
    const target = e.target
    setValueEdit({ ...valueEdit, content: target.value })
  }

  const render = (commentToID.length) === 0 ? (<div>loading...</div>) :
    (
      commentToID.map((value, index) => {
        return (<div className="comment-each" key={index}>
          <div className="comment-each-avatar">
            <img src={value.user.avatar} alt="avatar" />
          </div>
          <div className="comment-each-content">
            <div className="comment-each-content_title">{value.user.name}</div>
            <form onSubmit={submitCommemtHandle}>
              <div className="comment-content-box-input">
                <input type="text" value={conditionInput && alo === value.idEvaluate ? (valueEdit.content) : (value.content || "")} onChange={onChangeComment} className="comment-input-1" disabled={conditionInput && alo === value.idEvaluate ? false : true} />
                <span className="comment-content-box-input__span"></span>
              </div>
            </form>
            <div className="comment-content__react">
            <i class="far fa-thumbs-up"></i>
            <i class="far fa-thumbs-down"></i>
            <span>Feedback</span>
            </div>
            <div className="comment-each-box">
            {/*click hiện bảng chọn, class là đang set đk click edit thì mất icon*/}
              <i onClick={clickIconHandle} className={conditionInput ? "display--none" : "fas fa-ellipsis-v"}>
                <div className={conditionIcon ? "comment-each-box__content" : "display--none"}>
                  {value.user.idUser === user.idUser ?
                    (
                      <ul>
                        <li onClick={() => clickEditHandle(value.content, value.idEvaluate)}>Edit</li>
                        <li onClick={() => deleteCommentHandle(value)}>Delete</li>
                      </ul>
                    ) :
                    (<div className="comment-each-content__evaluate">Evaluate</div>)}
                </div>
              </i>
            </div>
          </div>
          <div className="button-bubble comment-each-content_button">
            <button onClick={() => click1(value.idEvaluate)} className={conditionInput && alo === value.idEvaluate ? "display--block" : "display--none"}>Save</button>
          </div>
        </div>)
      })
    )
  return (
    <div className="comment-list">
      {render}
    </div>
  );
};

export default CommentList;