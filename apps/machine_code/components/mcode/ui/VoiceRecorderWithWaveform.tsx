"use client";

import React, { useEffect, useRef, useState } from "react";

type AudioType = {
  id: number;
  audioBlob: Blob;
  title: string;
};

const VoiceRecorderWithWaveform = () => {
  // {audioBlob: Blob, title: 'Untitled', }

  const [recording, setRecording] = useState(false);
  const [voiceAudios, setVoiceAudios] = useState<AudioType[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    if (!canvas || !analyser || !dataArray) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      animationIdRef.current = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#4f46e5";
      ctx.beginPath();

      const sliceWidth = (width * 1.0) / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    };

    draw();
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks.current = [];

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      setVoiceAudios((prev) => [
        ...prev,
        {
          id: prev.length,
          audioBlob,
          title: `Recording ${prev.length + 1}`,
        },
      ]);
    };

    audioContextRef.current = new AudioContext();
    analyserRef.current = audioContextRef.current.createAnalyser();
    sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);

    analyserRef.current.fftSize = 2048;
    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);

    sourceRef.current.connect(analyserRef.current);
    drawWaveform();

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);

    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    audioContextRef.current?.close();
  };

  // add event listener to stop recording when the user leaves the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (recording) {
        stopRecording();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (recording) {
        stopRecording();
      }
    };
  }
  , [recording]);

  return (
    <div className="flex flex-col items-center p-6 gap-4">
      <h1 className="text-2xl font-bold">🎙️ Voice Recorder with Waveform</h1>

      <canvas
        ref={canvasRef}
        width={500}
        height={150}
        className="border rounded shadow"
      />

      <button
        onClick={recording ? stopRecording : startRecording}
        className={`px-6 py-2 rounded text-white font-semibold ${
          recording ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      <div>
        <h2 className="text-xl font-semibold mt-4">Recordings</h2>
        <ul className="space-y-2">
          {voiceAudios.map((audio, index) => (
            <li key={index} className="flex items-center space-x-4">
              <span
                contentEditable
                onBlur={(e) => {
                  const updatedTitle = e.target.textContent || "Untitled";
                  setVoiceAudios((prev) =>
                    prev.map((audio, i) =>
                      i === index ? { ...audio, title: updatedTitle } : audio
                    )
                  );
                }}
                className="font-medium"
              >
                {audio.title}
              </span>
              <CustomAudioPlayer audioBlob={audio.audioBlob} />
            </li>
          ))}
        </ul>
      </div>

      {/* {audioURL && <audio controls src={audioURL} className="mt-4" />} */}
    </div>
  );
};

export default VoiceRecorderWithWaveform;

const CustomAudioPlayer = ({ audioBlob }: { audioBlob: Blob }) => {
  const [audioURL, setAudioURL] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(audioBlob);
    setAudioURL(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [audioBlob]);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => {
          const audio = new Audio(audioURL);
          audio.play();
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Play
      </button>
      <button
        onClick={() => {
          const audio = new Audio(audioURL);
          audio.pause();
        }}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Pause
      </button>
    </div>
  );
};
