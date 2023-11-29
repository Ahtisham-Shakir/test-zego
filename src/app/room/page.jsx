"use client"
import React ,{useEffect} from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
const RoomPage = () => {
    const roomID = "123"

    const myMeeting = async (element)=>{
        const appID  = 2142330120
        const serverSecret = "2d597e6ab5fa94e32e49b2e5c14db343"
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString() ,  "Wahab");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
           container: element,
           sharedLinks: [
                  {
                    name: 'Personal link',
                    url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                      '?roomID=' +
                      roomID,
                  },
            ],
           scenario: {
                  mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            
        });  

    }

  return (
    <div>
        <div ref={myMeeting} className=""/>
    </div>
  )
}

export default RoomPage