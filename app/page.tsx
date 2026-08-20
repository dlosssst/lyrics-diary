"use client";
import { useState,useRef,useEffect } from "react";

const songs = [
  {
    id:1,
    title:"Demo Song",
    artist:"Diary Lyrics",
    coverKey:"cover/demo.jpg",
    videoKey:"mv/demo.mp4",
    zh:"中文歌词第一行\n中文歌词第二行",
    en:"English line 1\nEnglish line 2",
    vi:"Lời bài hát dòng 1\nLời bài hát dòng 2"
  }
];

type Song = typeof songs[0];

export default function Home(){
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSong,setCurrentSong] = useState<Song>(songs[0]);
  const [videoSrc,setVideoSrc] = useState("");

  // 许愿表单
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [tip, setTip] = useState('');

  const submitWish = async () => {
    if (!name || !msg) {
      setTip('Please fill your name and wish / 请填写称呼和心愿内容');
      return;
    }
    const res = await fetch('/api/submit-wish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message: msg })
    });
    if (res.ok) {
      setTip('Wish submitted successfully, only admin can view / 心愿已成功提交，仅站长可见');
      setName('');
      setMsg('');
    } else {
      setTip('Submit failed, please try later / 提交失败，请稍后重试');
    }
  };

  // 移除原来的R2接口fetch请求，不再请求视频地址
  /*
  useEffect(()=>{
    const fetchUrl = async ()=>{
      const res = await fetch(`/api/get-video-url?key=${encodeURIComponent(currentSong.videoKey)}`);
      const json = await res.json();
      setVideoSrc(json.signedUrl);
    };
    fetchUrl();
  },[currentSong]);
  */

  // 音画同步代码也暂时注释
  /*
  useEffect(()=>{
    const audio = audioRef.current;
    const video = videoRef.current;
    if(!audio||!video||!videoSrc) return;

    audio.src = videoSrc;

    const syncTime = ()=>{
      if(Math.abs(video.currentTime-audio.currentTime)>0.2){
        video.currentTime = audio.currentTime;
      }
    };
    const playEv = ()=> video.play().catch(()=>{});
    const pauseEv = ()=> video.pause();

    audio.addEventListener("timeupdate",syncTime);
    audio.addEventListener("play",playEv);
    audio.addEventListener("pause",pauseEv);

    if("mediaSession" in navigator){
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.artist,
        artwork:[{src:"",sizes:"512x512",type:"image/jpeg"}]
      });
      navigator.mediaSession.setActionHandler("play",()=>audio.play());
      navigator.mediaSession.setActionHandler("pause",()=>audio.pause());
    }

    return ()=>{
      audio.removeEventListener("timeupdate",syncTime);
      audio.removeEventListener("play",playEv);
      audio.removeEventListener("pause",pauseEv);
    };
  },[videoSrc,currentSong]);
  */

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lyrics Diary</h1>

      <audio ref={audioRef} preload="metadata" className="hidden"/>

      {/* 暂时隐藏视频区域 */}
      {/*
      {videoSrc && (
        <div className="my-6">
          <video
            ref={videoRef}
            muted
            controls
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e)=>e.preventDefault()}
            className="w-full rounded-lg"
          />
        </div>
      )}
      */}

      <div className="flex gap-3 my-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">播放（视频功能稍后开启）</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded">暂停</button>
      </div>

      <div className="select-none whitespace-pre-line leading-7 text-lg">
        <h3 className="font-bold mt-4">中文歌词 Chinese Lyrics</h3>
        {currentSong.zh}
        <br/><br/>
        <h3 className="font-bold">English Lyrics</h3>
        {currentSong.en}
        <br/><br/>
        <h3 className="font-bold">Tiếng Việt</h3>
        {currentSong.vi}
      </div>

      {/* 许愿留言区 */}
      <div className="mt-12 border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">Leave your wish 留下心愿</h3>
        <p className="text-gray-500 text-sm mb-4">All messages are only visible to website owner, will not be public 所有留言仅站长查看，不会公开展示</p>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your name / 你的称呼"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded outline-none"
          />
          <textarea
            placeholder="Write down your wish... / 写下你的心愿..."
            rows={4}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full p-2 border rounded outline-none resize-none"
          />
          <button
            onClick={submitWish}
            className="px-5 py-2 bg-indigo-600 text-white rounded"
          >
            Submit wish 提交心愿
          </button>
          {tip && <p className="text-sm text-gray-600 mt-2">{tip}</p>}
        </div>
      </div>

    </main>
  )
}