"use client";

import React, { useEffect } from "react";

const RoomPage = () => {
  const roomID = "123";

  useEffect(() => {
    const loadZegoUIKitPrebuilt = async () => {
      try {
        const { ZegoUIKitPrebuilt } = await import(
          "@zegocloud/zego-uikit-prebuilt"
        );

        const element = document.getElementById("your-element-id");

        if (element) {
          const appID = 2142330120;
          const serverSecret = "2d597e6ab5fa94e32e49b2e5c14db343";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Wahab"
          );
          const zp = ZegoUIKitPrebuilt.create(kitToken);
          zp.joinRoom({
            showScreenSharingButton: false,
            preJoinViewConfig: {
              title: "Join Appointment with wahab",
            },
            showTextChat: false,
            branding:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM0I2z8hvE856oMv5moIbPntQi9MPJF3nesQJMobwfC0cQ4HV_Mg_bfZa25a3ydjI9mU&usqp=CAU",
            container: element,
            sharedLinks: [
              {
                name: "Personal link",
                url:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname +
                  "?roomID=" +
                  roomID,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
          });
        }
      } catch (error) {
        console.error("Error loading ZegoUIKitPrebuilt:", error);
      }
    };

    loadZegoUIKitPrebuilt();
  }, [roomID]);

  return (
    <div>
      <div id="your-element-id" className="" />
    </div>
  );
};

export default RoomPage;
