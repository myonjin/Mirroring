import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import Badge from '@mui/material/Badge'
import { IconButton } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useLocation } from 'react-router-dom'
import 'assets/styles/signaldetail.css'
import api from 'api/Api.js'
import { Document, Page } from 'react-pdf'
import SignalBtn from 'components/common/SignalBtn'

function signalDetail() {
  const location = useLocation()
  const signalSeq = parseInt(location.state)
  console.log(signalSeq)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  // const [pdfDocument] = useState()

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  // const signaldetailSeq = parseInt(location.state.id)
  const [data, setData] = useState([])
  const [likes, setLikes] = useState(1)
  const [liked, setLiked] = useState(false)
  const [ucc, setUcc] = useState()
  // const aaaa = 'https://www.youtube.com/watch?v=ai6EZ9oBHmE&ab_channel=maplestorybgmSECONDCHANNEL'
  const handleClick = async () => {
    if (!liked) {
      try {
        // Make a POST request to your API to add a like
        // const response = await fetch(`/api/posts/${postId}/likes`, {
        //   method: "POST",
        // });
        // const data = await response.json();
        setLikes(likes + 1)
        setLiked(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        // Make a DELETE request to your API to remove a like
        // const response = await fetch(`/api/posts/${postId}/likes`, {
        //   method: "DELETE",
        // });
        // const data = await response.json();
        setLikes(likes - 1)
        setLiked(false)
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    api.get(process.env.REACT_APP_API_URL + `/signalweek/${signalSeq}/`).then((res) => {
      setData(res.data.body)
      setUcc(res.data.body.uccUrl)
      console.log(JSON.stringify(res.data.body))
    })
  }, [])
  return (
    <div className="signaldetail-page-container">
      <div className="signaldetail-detail-container">
        <button
          onClick={() => {
            setUcc('https://www.youtube.com/watch?v=ai6EZ9oBHmE&ab_channel=maplestorybgmSECONDCHANNEL')
            console.log(ucc)
          }}
        >
          d
        </button>
        <div className="signaldetail-detail-title">{data.title}</div>
        {/* <div className="signaldetail-detail-middle">ddd</div> */}
        <div className="signal-regist-title" style={{ marginTop: '1em', float: 'right' }}>
          <IconButton size="medium" onClick={handleClick}>
            <Badge badgeContent={likes} color="secondary">
              <ThumbUpIcon fontSize="large" color={liked ? 'secondary' : 'action'} />
            </Badge>
          </IconButton>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={ucc} // 플레이어 url
            playing={true} // 자동 재생 on
            width="100%"
            muted={true} // 자동 재생 on
            controls={true} // 플레이어 컨트롤 노출 여부
            light={false} // 플레이어 모드
            pip={true} // pip 모드 설정 여부
          />
        </div>
        {/* <div className="signal-regist-title" style={{ marginTop: '1em' }}>
          <label>Git 주소</label>
          <div style={{ marginTop: '1em' }} className="signaldetail-detail-content">
            <a href={data.deployUrl}>{data.deployUrl}</a>
          </div>
        </div> */}
        <div className="signal-regist-title" style={{ marginTop: '1em' }}>
          <label>배포 주소</label>
          <div style={{ marginTop: '1em' }} className="signaldetail-detail-content">
            <a href={data.deployUrl}>{data.deployUrl}</a>
          </div>
        </div>
        <div className="signal-regist-title" style={{ marginTop: '1em' }}>
          <label>PDF 파일</label>
          <div style={{ width: '1126px  ', height: '620px', overflow: 'hidden', marginTop: '1em' }}>
            <Document file={process.env.REACT_APP_API_URL + data.pptUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page width={1126} height={720} pageNumber={pageNumber} />
            </Document>
          </div>
          <p style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', transform: 'translateX(-50px)' }}>
            <SignalBtn sigwidth="48px" onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}>
              &lt;
            </SignalBtn>
            <h2 style={{ margin: '1em' }}>
              Page {pageNumber} of {numPages}
            </h2>
            <SignalBtn onClick={() => (pageNumber < numPages ? setPageNumber(pageNumber + 1) : null)}>&gt;</SignalBtn>
          </p>
        </div>
        <div className="apply-detail-content-section">
          <label>README</label>
          <div className="apply-detail-content">
            ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
          </div>
        </div>
      </div>
    </div>
  )
}

export default signalDetail
