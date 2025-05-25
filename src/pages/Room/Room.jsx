import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 555675961; // Replace with your actual App ID
        const serverSecret = "166bbf1ce068e454e9f2118544967842"; // Replace with your actual Server Secret
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Samiran Bisal" + Math.floor(Math.random() * 1000) // Random user name
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:5173/room/${roomId}`, // Replace with your actual domain
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
                // modeConfig: {
                //     isAudioVideoCall: true, // Enable audio and video
                // },
                // mode: ZegoUIKitPrebuilt.GroupCall
            },
        });
    }    
  return (
    <div className="room">
      <h1>Welcome to the Room Page</h1>
        <h3>{roomId}</h3>
        <div ref={myMeeting} style={{ width: "100%", height: "100vh" }}></div>
      <p>This is a placeholder for the room functionality.</p>
      <p>Here you can manage your rooms, view details, and more.</p>
    </div>
  );
}

export default Room;