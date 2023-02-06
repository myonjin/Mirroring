import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import 'assets/styles/profile/profileinput.css'
import SignalBtn from 'components/common/SignalBtn'
import closeBtn from 'assets/image/x.png'
import api from 'api/Api'

function InputBottomModal({ open, onClose, inputTopTitle }) {
  const userSeq = sessionStorage.getItem('userSeq')
  const [tag, setTag] = useState('')
  const [numberOfTags, setNumberOfTags] = useState(0)
  const [arrayOfTags, addTag] = useState([])
  const handleDelete = (h) => () => {
    addTag((arrayOfTags) => arrayOfTags.filter((tag) => tag !== h))
  }
  const handleHashtagChange = (event) => {
    // handleToSetTag(event.target.value)
    setTag(event.target.value)
  }
  const newTag = () => {
    setNumberOfTags(numberOfTags + 1)
    addTag((arrayOfTags) => arrayOfTags.concat(tag))
    console.log(tag)
  }
  const tags = arrayOfTags.map((h, index) => (
    <div key={index} onClick={handleDelete}>
      {h}
    </div>
  ))

  const handleToProfile = async () => {
    if (inputTopTitle === '경력') {
      arrayOfTags.map(async (item) => {
        await api.post(process.env.REACT_APP_API_URL + `/profile/career/${userSeq}`, {
          content: item,
        })
      })
      console.log(arrayOfTags)
    } else {
      arrayOfTags.map(async (item) => {
        await api.post(process.env.REACT_APP_API_URL + `/profile/exp/${userSeq}`, {
          content: item,
        })
      })
      console.log(arrayOfTags)
    }
    addTag([])
    setNumberOfTags(0)
    setTag('')
    onClose(onClose(true))
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div className="close">
            <img
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                position: 'absolute',
                left: '90%',
                bottom: '80%',
                transform: 'translate(-50%, 0%)',
              }}
              src={closeBtn}
              alt="closeBtn"
              onClick={onClose}
            />
          </div>
          <div className="user-profile-input-main">
            <div className="user-profile-input-title">{inputTopTitle}</div>
            <div className="user-profile-input-input">
              <TextField
                id="filled-multiline-flexible"
                name={inputTopTitle}
                label={inputTopTitle}
                value={tag}
                sx={inputStyle}
                onChange={handleHashtagChange}
              />
              <SignalBtn
                sigwidth="80px"
                sigheight="50px"
                sigfontsize="24px"
                sigborderradius={15}
                sigmargin="auto"
                onClick={newTag}
              >
                추가
              </SignalBtn>
            </div>
            <div className="user-profile-input-chip">{numberOfTags > 0 ? tags : ''}</div>
            <div className="user-profile-input-check-btn">
              <SignalBtn
                sigwidth="60px"
                sigheight="40px"
                sigfontsize="20px"
                sigborderradius={15}
                onClick={handleToProfile}
              >
                확인
              </SignalBtn>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

const style = {
  width: 607,
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: 20,
  border: 'none',
  boxShadow: 24,
  p: 4,
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  // overflow: 'hidden',
}

const inputStyle = {
  backgroundColor: '#DDDBEC',
  width: '300px',
  '& label.Mui-focused': {
    color: '#574b9f',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#574b9f',
    },
  },
}

export default InputBottomModal
